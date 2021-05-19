import React from 'react';
import './notice.css';
import styled from "styled-components";

import ArtImg from "./img/art_img.png";

function notice(){
    return (
        <NoticeArea>
            <div className="notice">
                <h3>오늘, <span>친환경</span> 소식</h3>

                <article>
                    <div className="article_header">
                        <img src={ArtImg} alt="Article_Img"></img>
                    </div>
                </article>
                <article>

                </article>
            </div>
        </NoticeArea>
    );

}

const NoticeArea = styled.div`
width: auto;
height: 94vh;
`;

export default notice;