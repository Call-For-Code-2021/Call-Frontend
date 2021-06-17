import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './query.css';
import Call from './img/call.png';
import Ping from './img/ping.png';
import X from './img/x.png';
import Logo from './img/el_logo.png';
import Star from './img/star.png';
import Star_none from './img/star_none.png';
import Clock from './img/clock (1).png';
import Leaf from './img/leaf.png';
import Order from './img/orderlist.jpg';

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
      <meta name='viewport' content='initial-scale=1, viewport-fit=cover'></meta>
      <div id="place_page_bg">
        <div id="place_page">
          <img src={Logo} id="el_main" alt="Logo"></img>
          <button onClick={() => document.getElementById("place_page_bg").style.visibility="hidden"} id="X_box"><img src={X} id="X" alt="X"></img></button>
          <h3>엘카페 커피로스터스</h3>
          <h5>카페</h5>
          
          <div id="star_sum">
            <div id = "jum">4.0</div>
            <img src={Star} id="star" alt="star"/>
            <img src={Star} id="star" alt="star"/>
            <img src={Star} id="star" alt="star"/>
            <img src={Star} id="star" alt="star"/>
            <img src={Star_none} id="star" alt="star"/>
          </div>
          <table className="des_table">
              <tr>
                  <td className="des_td des_tds"><img src={Ping} alt="ping" className="des_icon"/></td>
                  <td className="des_tds">혜화역에서 29m</td>
                  <td className="des_td des_tds"><img src={Clock} alt="clock" className="des_icon2"/></td>
                  <td className="des_tds">07:00~21:00</td>
              </tr>
              <tr>
                  <td className="des_td des_tds"><img src={Call} alt="call" className="des_icon2"/></td>
                  <td className="des_tds">1522-3232</td>
                  <td className="des_td des_tds"><img src={Leaf} alt="leaf" className="des_icon2"/></td>
                  <td className="des_tds">(친환경 용기)</td>
              </tr>
              <tr>
                  <td colspan="4" className="des_btn_con">
                      <p className="des_p"><button className="btn btn-outline-success" id="btn_q">주문 확정</button></p>
                  </td>
              </tr>
              <tr>
                  <td colspan="4">
                      <p className="des_p">주문 확정 시 절약된 나무가 자라나요.</p>
                  </td>
              </tr>
              <tr>
                  <td colSpan="4">
                      <p className="des_p"><img src={Order} alt="orderlist" className="orderlist"/></p>
                  </td>
              </tr>
          </table>
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
                   <img src={Ping} id="ping" alt="ping"></img>
                   <span>{item.road_address_name}</span>
                    <span>{item.address_name}</span>
                 </div>
                ) : (
                  <span>{item.address_name}</span>
                )}
               <span><img src={Call} id="call" alt="Call"></img>{item.phone}</span>
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