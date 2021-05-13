import React from 'react';
import {Link} from "react-router-dom";
import './nav.css';
import HomeImg from "./img/home.png";
import SearchImg from "./img/loupe.png";

function nav(){
    return (
        <div className="nav-container">
            <div className="nav-child">
                <Link className="nav-link" to="/map_main">
                    <img src={HomeImg} alt="Home" id="PageIcon"></img>
                    HOME

                </Link>
            </div>
            <div className="nav-child">
                <Link className="nav-link" to="/query">
                    <img src={SearchImg} alt="Search" id="PageIcon"></img>
                    SEARCH
                    
                </Link>
            </div>
            <div className="nav-child">
                <Link className="nav-link" to="/notice">ECO-NOTICE</Link>
            </div>
            <div className="nav-child">
                <Link className="nav-link" to="/mypage">MYPAGE</Link>
            </div>
        </div>
    );

}

export default nav;