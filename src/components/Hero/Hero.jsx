import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";

function Hero(props) {
    const transitions = {
        type: "spring",
        duration: 3,
    };

    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-hero">
                <Header />

                <div className="the-best-ad">
                    <motion.div
                        className=""
                        initial={{
                            left: "238px",
                        }}
                        whileInView={{
                            left: "8px",
                        }}
                        transition={{ ...transitions, type: "tween" }}
                    ></motion.div>
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
                <motion.div
                    initial={{
                        right: "-1rem",
                    }}
                    whileInView={{
                        right: "4rem",
                    }}
                    transition={transitions}
                    className="Heart-rate"
                >
                    <img src={heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={hero_image} alt="hero" />
                <motion.img
                    initial={{
                        right: "11rem",
                    }}
                    whileInView={{
                        right: "20rem",
                    }}
                    transition={transitions}
                    src={hero_image_back}
                    alt="hero-back"
                />
                <motion.div
                    className="Calories-burned"
                    initial={{
                        right: "37rem",
                    }}
                    whileInView={{
                        right: "28rem",
                    }}
                    transition={transitions}
                >
                    <img src={calories} alt="calories" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
