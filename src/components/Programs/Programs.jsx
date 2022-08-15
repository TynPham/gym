import React from "react";
import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png";
import "./Programs.css";

function Programs(props) {
    return (
        <div className="programs">
            <div className="programs-text">
                <span className="stroke-text">EXPLORE OUR</span>
                <span>PROGRAMS</span>
                <span className="stroke-text">TO SHAPE YOU</span>
            </div>
            <div className="programs-categories">
                {programsData.map((data, index) => (
                    <div key={index} className="categories">
                        {data.image}
                        <span>{data.heading}</span>
                        <span>{data.details}</span>
                        <div className="join">
                            <span>Join now</span>
                            <img src={rightArrow} alt="next-logo" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Programs;
