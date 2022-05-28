import React from "react";
import profileImg from "../../assets/image-jeremy.png";
import "./mainCard.style.scss";

const MainCard = (props) => {
    return(
        <div className="mainCard">
            <div className="profile-card">
                <img src={profileImg} alt="#"/>
                <div>
                    <p>Report for</p>
                    <p>Jeremy Robson</p>
                </div>
            </div>

            <div className="time-frame">
                <p onClick = {() => props.onClick("daily")} className = {props.time === "daily" ? "active" : ""}>Daily</p>
                <p onClick = {() => props.onClick("weekly")} className = {props.time === "weekly" ? "active" : ""}>Weekly</p>
                <p onClick = {() => props.onClick("monthly")} className = {props.time === "monthly" ? "active" : ""}>Monthly</p>
            </div>
        </div>
    );
}

export default MainCard;