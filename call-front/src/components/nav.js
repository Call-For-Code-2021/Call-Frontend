import React from 'react';
import {Link} from "react-router-dom";
import './nav.css';

function nav(){
    return (
        <div className="nav-container">
            <div className="nav-child">
                <Link className="nav-link" to="/map_main">HOME</Link>
            </div>
            <div className="nav-child">
                <Link className="nav-link" to="/query">SEARCH</Link>
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