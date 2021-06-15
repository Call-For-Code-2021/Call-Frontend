import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './notice.css';
import styled from "styled-components";

import ArtImg_news from "./img/art_img_news1.png";
import ArtImg_skb from "./img/art_img_skbrodband.png";

function Notice(){

    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchNews = async () => {
            try {
                setError(null);
                setNews(null);
                setLoading(true);
                const response = await axios({
                    method: "get",
                    url: "https://charong.herokuapp.com/newsget_all?from=0&limit=5",
                    from: 0,
                    limit: 5,
                });
                setNews(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchNews();
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

                <article>
                    <div className="article_header">
                        <img src={ArtImg_news} alt="Article_Img_news"></img>
                        <h4>환경 뉴스 <span>&nbsp;|&nbsp; 2021-05-19</span></h4>
                    </div>
                    <div className="article_body">
                        <h3>글로벌 기업 서울에 모여 '기후변화‧환경문제 해법' 찾는다</h3>
                        <p>대한상공회의소는 오는 27일 '2021 P4G(Partnering for Green Growth and the Global Goals 2030)' 서울 정상회의 비즈니스 포럼’을 온라인으로 개최한다고 19일 밝혔다.</p>
                    </div>
                </article>
                <article>
                    <div className="article_header">
                        <img src={ArtImg_skb} alt="Article_Img_skb"></img>
                        <h4>환경 뉴스 <span>&nbsp;|&nbsp; 2021-05-18</span></h4>
                    </div>
                    <div className="article_body">
                        <h3>교통·환경 문제로 고통… "GTX-D 등 반영해야"</h3>
                        <p>이재현 서구청장은 핵심인 서울도 주장하는 지중화 연결 노선이 빠져 있기 때문에
                            GTX-D 노선이 구축돼야 하고 그리고 강남 뿐만 아니라 강북으로 연결되는 2호선과 5호선도 이번 기회에 GTX-D와 한꺼번에
                            추진돼야 하고, 거기에 맞는 대안이라도 재검토돼야 한다고 밝혔다.</p>
                    </div>
                </article>
                <article>
                    <div className="article_header">
                        <img src={ArtImg_skb} alt="Article_Img_skb"></img>
                        <h4>{news.map(news => (<div key={news.id===1}>{news.writer}</div>))}<span>&nbsp;|&nbsp; 2021-05-18</span></h4>
                    </div>
                    <div className="article_body">
                        <h3>교통·환경 문제로 고통… "GTX-D 등 반영해야"</h3>
                        <p>이재현 서구청장은 핵심인 서울도 주장하는 지중화 연결 노선이 빠져 있기 때문에
                            GTX-D 노선이 구축돼야 하고 그리고 강남 뿐만 아니라 강북으로 연결되는 2호선과 5호선도 이번 기회에 GTX-D와 한꺼번에
                            추진돼야 하고, 거기에 맞는 대안이라도 재검토돼야 한다고 밝혔다.</p>
                    </div>
                </article>
            </div>
        </NoticeArea>
    );

}

const NoticeArea = styled.div`
width: auto;
height: 94vh;
`;

export default Notice;