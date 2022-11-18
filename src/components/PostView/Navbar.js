import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import './Navbar.css';

export default function Navbar() {
    return (
        <header>
            <nav>
                <div className="icon-container">
                    <div className="icon">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </div>
                    <h1>InstaClone</h1>
                </div>
                <div className="camera-icon">
                    <FontAwesomeIcon icon={faCameraRetro}/>
                </div>
            </nav>
        </header>
    );
}
