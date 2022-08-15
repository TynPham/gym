import React, { useState } from "react";
import "./Testimonials.css";
import leftArrows from "../../assets/leftArrow.png";
import rightArrows from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";

function Testimonials(props) {
    const [index, setIndex] = useState(0);
    const handlePrev = () => {
        if (index === 0) {
            setIndex(testimonialsData.length - 1);
        } else {
            setIndex((prev) => prev - 1);
        }
    };
    const handleNext = () => {
        if (index === testimonialsData.length - 1) {
            setIndex(0);
        } else {
            setIndex((prev) => prev + 1);
        }
    };
    return (
        <div className="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <span>{testimonialsData[index].review}</span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[index].name}{" "}
                    </span>{" "}
                    - {testimonialsData[index].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[index].image} alt="image" />
                <div className="arrows">
                    <img src={leftArrows} alt="prev" onClick={handlePrev} />
                    <img src={rightArrows} alt="next" onClick={handleNext} />
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
