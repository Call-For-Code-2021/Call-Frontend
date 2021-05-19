import React from 'react';
import styled from "styled-components";
import "./query.css";

function query(){
    return (
        <QueryArea>
            <div className="query">
                <h1>QueryPage</h1>
            </div>
        </QueryArea>
    );

}

const QueryArea = styled.div`
width: auto;
height: 94vh;
`;

export default query;