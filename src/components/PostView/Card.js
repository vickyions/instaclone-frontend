import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

export default function Card(props) {
    const { name, location, likes, description, PostImage, date } = props.data;
    const [d, m, y] = date.split("/");
    const dateValue = new Date(`${parseInt(m) - 1}/${d}/${y}`).toLocaleString(
        "en-in",
        { year: "numeric", month: "short", day: "numeric" }
    );

    return (
        <div className="card">
            <div className="card-head">
                <div className="name-loc">
                    <p className="name">{name}</p>
                    <p className="location">{location}</p>
                </div>
                <div className="card-head-option">
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </div>

            <div className="card-img">
                <img
                    src={require(`../../images/${PostImage}`)}
                    alt={description}
                />
            </div>

            <div className="card-action">
                <div className="card-actions-icon">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <p className="post-date">{dateValue}</p>
            </div>
            <div className="card-desc">
                <p className="likes">{likes} likes</p>
                <p className="desc">{description}</p>
            </div>
        </div>
    );
}
