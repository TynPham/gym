import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

function Plans(props) {
    return (
        <div className="plans-container">
            <div className="blur blur1"></div>
            <div className="blur blur2"></div>
            <div className="plans-text">
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITHUS</span>
            </div>
            <div className="plans">
                {plansData.map((data, index) => (
                    <div key={index}>
                        {data.icon}
                        <span className="title">{data.name}</span>
                        <span className="money">$ {data.price}</span>
                        <div className="features">
                            <div className="feature">
                                <img src={whiteTick} alt="whiteTick" />
                                <span>{data.features[0]}</span>
                            </div>
                            <div className="feature">
                                <img src={whiteTick} alt="whiteTick" />
                                <span>{data.features[1]}</span>
                            </div>
                            <div className="feature">
                                <img src={whiteTick} alt="whiteTick" />
                                <span>{data.features[2]}</span>
                            </div>
                        </div>
                        <span className="see-more">See more benefits -></span>
                        <button className="btn plan-btn">Join now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;
