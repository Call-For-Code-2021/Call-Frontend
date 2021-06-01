import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./query.css";

import XImg from "./img/free-icon-letter-x-109602.png";

const { kakao } = window;

const Query = ({ searchPlace }) => {

    // 검색결과 배열에 담아줌
    const [Places, setPlaces] = useState([])

    useEffect(() => {
        const mapContainer = document.getElementById('map')
        const mapOption = {
            center: new kakao.maps.LatLng(37.57813143829081, 126.9773018596565), //지도의 중심좌표
            level: 5,
        }
        const map = new kakao.maps.Map(mapContainer, mapOption)  // 지도 생성 및 객체 리턴

        const ps = new kakao.maps.services.Places()

        ps.keywordSearch(searchPlace, placesSearchCB)

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds()


                for (let i = 0; i < data.length; i++) {
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }

                map.setBounds(bounds)
                // 페이지 목록 보여주는 displayPagination() 추가
                displayPagination(pagination)
                setPlaces(data)
            }

            else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                alert('검색 결과가 존재하지 않습니다.\nSearch results do not exist.');
                return;
            }

            else if (status === kakao.maps.services.Status.ERROR) {
                alert('검색 중 오류가 발생했습니다.\nAn error occurred while searching.');
                return;
            }

        }


        // 검색결과 목록 하단에 페이지 번호 표시
        function displayPagination(pagination) {
            var paginationEl = document.getElementById('pagination'),
                fragment = document.createDocumentFragment(),
                i

            // 기존에 추가된 페이지 번호 삭제
            while (paginationEl.hasChildNodes()) {
                paginationEl.removeChild(paginationEl.lastChild)
            }

            for (i = 1; i <= pagination.last; i++) {
                var el = document.createElement('a')
                el.href = '#'
                el.innerHTML = i

                if (i === pagination.current) {
                    el.className = 'on'
                } else {
                    el.onclick = (function (i) {
                        return function () {
                            pagination.gotoPage(i)
                        }
                    })(i)
                }

                fragment.appendChild(el)
            }
            paginationEl.appendChild(fragment)
        }

    }, [searchPlace])

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
                <div className="recent_query">
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
            </div>
            <div className="result_query">
                <div id="result-list">
                    {Places.map((item, i) => (
                        <div key={i} style={{ marginTop: '20px'}}>
                            <span>{i + 1}</span>
                            <div>
                                <h5>{item.place_name}</h5>
                                {item.road_address_name ? (
                                    <div>
                                        <span>{item.road_address_name}</span>
                                        <span>{item.address_name}</span>
                                    </div>
                                ) : (
                                    <span>{item.address_name}</span>
                                )}
                                <span>{item.phone}</span>
                            </div>
                        </div>
                    ))}
                    <div id="pagination"></div>
                </div>
            </div>
        </QueryArea>
    );
}

const QueryArea = styled.div`
  height: 94vh;
`;

export default Query;