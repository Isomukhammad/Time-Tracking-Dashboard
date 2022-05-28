import React from "react";

import "./card.style.scss";

import "../../assets/icon-exercise.svg"

const Card = (props) => {
    const time = props.time;
    const {title, timeframes: {[time]: {current, previous }}} = props.data;
    const {cardColor, backgroundImage} = props.style;

    return(
    <>
        <div className = "card" style = {{backgroundColor: cardColor}}>
            <div className="card-img">
                <img src={backgroundImage} alt="#"/>
            </div>
            <div className="info">
                <div className="title">
                    <div>{title}</div>
                    <div className="dots">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div className="timeframe">
                    <div className="current">{current}hrs</div>
                    <div className="previous">{time === "weekly" ? "Last Week" : time === "daily" ? "Yesterday" : "Last Month"} - {previous}hrs</div>
                </div>
            </div>
        </div>
    </>
    ) 
}

export default Card;