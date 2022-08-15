import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";

function Hero(props) {
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-hero">
                <Header />

                <div className="the-best-ad">
                    <div className=""></div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">SHAPE </span>
                        <span>YOUR</span>
                    </div>
                    <div>
                        <span>IDEAL </span>
                        <span>BODY</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your
                            ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                <div className="buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-hero">
                <button className="btn">Join Now</button>
                <div className="Heart-rate">
                    <img src={heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>
                <img src={hero_image} alt="hero" />
                <img src={hero_image_back} alt="hero-back" />
                <div className="Calories-burned">
                    <img src={calories} alt="calories" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
