import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";

function Header(props) {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <ul className="header-menu">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Programs</a>
                </li>
                <li>
                    <a>Why us</a>
                </li>
                <li>
                    <a>Plans</a>
                </li>
                <li>
                    <a>Testimonials</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
