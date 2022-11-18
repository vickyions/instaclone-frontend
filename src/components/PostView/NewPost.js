import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ADDRESS } from "../../App";
import "./NewPost.css";

export default function NewPost() {
  const [post, setPost] = useState({});
  const [image, setImage] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  let navigate = useNavigate();

  const onChangeHandler = (event) => {
    setIsFailed(false);
    if (event.target.type === "file") {
      setImage(event.target.files[0]);
    } else if (event.target.type === "text") {
      const { name, value } = event.target;
      setPost((prevPost) => ({ ...prevPost, [name]: value }));
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (post.name && post.location && post.description) {
      setIsFailed(false);
      const formData = new FormData();
      const { name, location, description } = post;
      formData.append("name", name);
      formData.append("location", location);
      formData.append("description", description);
      formData.append("image", image);
      async function createPost(formData) {
        setIsUploading(true);
        const res = await fetch(API_ADDRESS, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        console.log(data);
        if (data.status === "success") {
          navigate("/posts");
        } else {
          setIsUploading(false);
          setIsFailed(true);
          console.log("picture upload failed:: ", data.message);
        }
      }
      createPost(formData);
    }
  };

  return (
    <>
      {isUploading && <div className="loader">Upload in Progress</div>}
      {!isUploading && (
        <div className="form-container">
          <form
            id="post-form"
            method="POST"
            encType="multipart/form-data"
            onSubmit={onSubmitHandler}
          >
            <input
              type="file"
              placeholder="No file chosen"
              onChange={onChangeHandler}
              required
            />
            <div className="inline-inputs">
              <input
                type="text"
                placeholder="Author"
                name="name"
                minLength="3"
                onChange={onChangeHandler}
                required
              />
              <input
                type="text"
                placeholder="Location"
                name="location"
                minLength="3"
                onChange={onChangeHandler}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Description"
              minLength="3"
              onChange={onChangeHandler}
              name="description"
              required
            />
            <button type="submit" form="post-form">
              Post
            </button>
          </form>
          {isFailed && (
            <div className="upload-failed">Upload Failed. try again</div>
          )}
        </div>
      )}
    </>
  );
}
