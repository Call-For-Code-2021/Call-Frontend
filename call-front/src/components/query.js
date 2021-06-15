import React, { useEffect, useState} from 'react'

import './query.css';
import Call from './img/call.png';
import Ping from './img/ping.png';
import X from './img/x.png';
import Logo from './img/el_logo.png';
import Star from './img/star.png';
import Star_none from './img/star_none.png';

const { kakao } = window



const MapContainer = ({ searchPlace }) => {

  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([])
  
   useEffect(() => {
  
    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(searchPlace, placesSearchCB)

    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
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
        el.className = "page-count"

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
    <>
      <div id="place_page_bg">
        <div id="place_page">
          <img src={Logo} id="el_main"></img>
          <button onClick={() => document.getElementById("place_page_bg").style.visibility="hidden"} id="X_box"><img src={X} id="X"></img></button>
          <h3>엘카페 커피로스터스</h3>
          <h5>카페</h5>
          
          <div id="star_sum">
            <div id = "jum">4.0</div>
            <img src={Star} id="star"/>
            <img src={Star} id="star"/>
            <img src={Star} id="star"/>
            <img src={Star} id="star"/>
            <img src={Star_none} id="star"/>
          </div>
          <div id="inf">
            <div>혜화역에서 29m</div>
            <div id="time">07:00~2100</div>
          </div>
          <div id="inf_2">
            <div>1522-3232</div>
            <div id="cup">친환경 용기</div>
          </div>
          <div id="a">a</div>
        </div>
      </div>
      
      <div style={{marginTop: '10vh'}}></div>
        <div id="result-list">
          {Places.map((item, i) => (
          <div key={i} style={{ marginTop: '4vh'}}>
            
              <div id="result-list-li">
               <h2 id="place_name">
                 <span id="place_count">{i + 1}  </span>
                 {item.place_name}
                 <button onClick={() => document.getElementById("place_page_bg").style.visibility="visible"} id="more">더보기</button>
                </h2>

               {item.road_address_name ? (
                 <div>
                   <img src={Ping} id="ping"></img>
                   <span>{item.road_address_name}</span>
                    <span>{item.address_name}</span>
                 </div>
                ) : (
                  <span>{item.address_name}</span>
                )}
               <span><img src={Call} id="call"></img>{item.phone}</span>
             </div>
            </div>
          ))}
          <div id="pagination"></div>
       </div>
      <div style={{marginBottom: '12vh'}}></div>
    </>
  )

}


export default MapContainer