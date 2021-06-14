import React, { useEffect, useState} from 'react'

import './query.css';
import Call from './img/call.png';
import Ping from './img/ping.png';

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
      <div style={{marginTop: '10vh'}}></div>
        <div id="result-list">
          {Places.map((item, i) => (
          <div key={i} style={{ marginTop: '4vh'}}>
            
              <div>
              <hr></hr>
               <h5 id="place_name"><span id="place_count">{i + 1}  </span>{item.place_name}</h5>
               
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