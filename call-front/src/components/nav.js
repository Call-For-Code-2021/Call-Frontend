import React from 'react';
import {Link} from "react-router-dom";

import './nav.css';

import HomeImg from "./img/home.png";
import SearchImg from "./img/loupe.png";
import LeafImg from "./img/leaf.png";
import UserImg from "./img/user.png";

function nav(){
    return (
        <div className="nav-section">
            <hr/>
            <div className="nav-container">
                <div className="nav-child">
                    <Link className="nav-link" to="/map_main">
                        <img src={HomeImg} alt="Home" id="PageIcon"></img>
                    </Link>
                </div>
                <div className="nav-child">
                    <Link className="nav-link" to="/query">
                        <img src={SearchImg} alt="Search" id="PageIcon"></img>
                    </Link>
                </div>
                <div className="nav-child">
                    <Link className="nav-link" to="/notice">
                        <img src={LeafImg} alt="Leaf" id="PageIcon"></img>
                    </Link>
                </div>
                <div className="nav-child">
                    <Link className="nav-link" to="/mypage">
                        <img src={UserImg} alt="User" id="PageIcon"></img>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default nav;