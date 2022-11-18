import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <header>
            <nav>
                <div className="icon-container" onClick={() => navigate("/posts")}>
                    <div className="icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <h1>InstaClone</h1>
                </div>
                <div className="camera-icon" onClick={() => navigate("/posts/create")}>
                    <FontAwesomeIcon icon={faCameraRetro} />
                </div>
            </nav>
        </header>
    );
}
