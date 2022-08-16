import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import "./Reasons.css";

function Reasons(props) {
    return (
        <div className="Reasons">
            <div className="reasons-left">
                <img src={image1} alt="1" />
                <img src={image2} alt="2" />
                <img src={image3} alt="3" />
                <img src={image4} alt="4" />
            </div>
            <div className="reasons-right">
                <span>SOME REASONS</span>
                <div className="why">
                    <span className="stroke-text">WHY </span>
                    <span>CHOOSE US?</span>
                </div>
                <div className="reasons">
                    <img src={tick} alt="reasons" />
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div className="reasons">
                    <img src={tick} alt="reasons" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div className="reasons">
                    <img src={tick} alt="reasons" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div className="reasons">
                    <img src={tick} alt="reasons" />
                    <span>RELIABLE PARTNERS</span>
                </div>
                <span className="partners-title">OUR PARTNERS</span>
                <div className="partners">
                    <img src={nb} alt="NB" />
                    <img src={adidas} alt="Adidas" />
                    <img src={nike} alt="Nike" />
                </div>
            </div>
        </div>
    );
}

export default Reasons;
