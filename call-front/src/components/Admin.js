import React from "react";

function Admin() {
    return(
        <div>
            <h1>admin</h1>
            <hr/>
            <h3>News Post Update Area</h3>
            <input
                name="newstitle"
                type="text"
            />
            <input
                name="newsdate"
                type="text"
            />
            <input
                name="newsdescript"
                type="text"
            />

        </div>
    );
}

export default Admin;