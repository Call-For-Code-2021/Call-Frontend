import React, { useEffect, useState} from 'react'

import './MapContainer.css';
import styled from "styled-components";

const { kakao } = window

const MapContainer = ({ searchPlace }) => {

  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([])
  
  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    const mapContainer = document.getElementById('map')
    const mapOption = {
      center: new kakao.maps.LatLng(37.57813143829081, 126.9773018596565), //지도의 중심좌표
      level: 5,
    }
    const map = new kakao.maps.Map(mapContainer, mapOption)  // 지도 생성 및 객체 리턴
    
    if (navigator.geolocation){

      navigator.geolocation.getCurrentPosition(function(position){
          let lat = position.coords.latitude,
              lon = position.coords.longitude;

          let locPosition = new kakao.maps.LatLng(lat, lon),
              message = '<div style="padding:5px;">현위치</div>';

          // 마커와 인퍼윈도우를 표시
          displayMarker(locPosition, message);
      });
    } else{
        let locPosition = new kakao.maps.LatLng(37.5677463677699,126.9153946742084),
          message = '위치 정보 사용이 불가능합니다.\nLocation information is not available.'
        displayMarker(locPosition,message);
    }

    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(searchPlace, placesSearchCB)

    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            let bounds = new kakao.maps.LatLngBounds()

            for (let i = 0; i < data.length; i++) {
                displayMarker1(data[i])
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
            }

            map.setBounds(bounds)
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

    // 지도에 마커와 인포윈도우를 표시
    function displayMarker(locPosition, message) {

      // 마커를 생성
      let marker1 = new kakao.maps.Marker({
          map: map,
          position: locPosition
      });

      let iwContent = message,
          iwRemoveable = true;
      
      var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable
      });

      infowindow.open(map,marker1);

      map.setCenter(locPosition);
    }

    function displayMarker1(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.setContent('<div id="CSPing">' + '<span id="pl_name">' + place.place_name + '</span>' + '</div>')
          infowindow.open(map, marker)
      })
    }
  }, [searchPlace])

  return (
    <>
      <Maps id="map">
      </Maps>
    </>
  )
}

const Maps = styled.div`
width: auto;
height: 100vh;
`;

export default MapContainer