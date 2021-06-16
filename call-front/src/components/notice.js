import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './notice.css';
import styled from "styled-components";

import ArtImg_news from "./img/art_img_news1.png";
import ArtImg_skb from "./img/art_img_skbrodband.png";

const Notice =(props) => {

    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(async () => {
        try {
            let json = await axios({
                url: "https://charong.herokuapp.com/news/get_all?from=0&limit=5",
                method: "get",
                data: {
                    from: 0,
                    limit: 5
                }
            });
            let data = [];
            for (let news_v in json.data) {
                data.push(json.data[news_v])
            }
            console.log(data);
            setNews(data)
        } catch (e){
            console.log(e)
        }
    }, []);

    if(loading)
        return <div>On Loading...</div>;
    if(error)
        return <div>Error Occurred</div>;
    if(!news)
        return null;

    return (
        <NoticeArea>
            <div className="notice">
                <h3>오늘, <span>친환경</span> 소식</h3>
                {news && news.map(id =>
                    <article>
                        <div className="article_header">
                            <img src={ArtImg_news} alt="Article_Img_news"></img>
                            <h4 key={id.writer}>{id.writer}<span>&nbsp;|&nbsp; {id.date}</span></h4>
                        </div>
                        <div className="article_body">
                            <h3 className="article_body_h3" key={id.title}>{id.title}</h3>
                            <p key={id.content}>{id.content}</p>
                        </div>
                    </article>
                )}
            </div>
        </NoticeArea>
    );

}

const NoticeArea = styled.div`
width: auto;
height: 94vh;
`;

export default Notice;