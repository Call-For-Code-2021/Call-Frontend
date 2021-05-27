import React from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./query.css";

import XImg from "./img/free-icon-letter-x-109602.png";

function query() {
    return (
        <QueryArea>
            <div className="query">
                <h3>서울 종로구 대학로</h3>
                <form action="" className="inputForm d-flex">
                    <input type="search"
                        className="form-control"
                        placeholder="식당이나 카페의 이름 또는 주소를 검색하세요."
                        aria-label="Search"
                    />
                    <button className="bani btn-outline-success" type="submit">검색</button>
                </form>
                <div className="article_header">
                    <h4>최근 검색어</h4>
                </div>
                <div className="article_body">
                    <div className="article_body_con">
                        <p>서울 종로구 대학로</p>
                        <img src={XImg} alt="X_btn"/>
                    </div>
                    <div className="article_body_con">
                        <p>서울 종로구 대학로</p>
                        <img src={XImg} alt="X_btn"/>
                    </div>
                </div>
            </div>
        </QueryArea>
    );
}

const QueryArea = styled.div`
  height: 94vh;
`

export default query;