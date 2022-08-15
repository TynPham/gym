import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

function Footer(props) {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={github} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                </div>
                <div className="logo-f">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f"></div>
            <div className="blur blur-f"></div>
        </div>
    );
}

export default Footer;
