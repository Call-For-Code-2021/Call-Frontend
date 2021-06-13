import React from 'react';
import { Link } from 'react-router-dom';
import Login from "./login_main";

const landing = () => {
    return (
        <>
            <div className="query_section">
                <Link className="nav-link" to="/map_main">맵으로</Link>
            </div>
            <Login/>
        </>
    );
}

export default landing;