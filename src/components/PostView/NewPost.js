import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [post, setPost] = useState({});
  const [image, setImage] = useState({});
  let navigate = useNavigate();

  const onChangeHandler = (event) => {
    if (event.target.type === "file") {
      setImage(event.target.files[0]);
    } else if (event.target.type === "text") {
      const { name, value } = event.target;
      setPost((prevPost) => ({ ...prevPost, [name]: value }));
    }
  };

  const onSubmitHandler = (event) => {
  };

  return (
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
    </div>
  );
}
