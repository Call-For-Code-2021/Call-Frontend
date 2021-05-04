import React from 'react';
import styled from "styled-components";

/*global kakao*/

class Map2 extends React.Component{

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=9a479b0eafcdbddcf0219e5a2018a610&libraries=LIBRARY";
        document.head.appendChild(script);

      script.onload = () => {
        kakao.maps.load(() => {
          let container = document.getElementById("map");
          let options = {
            center: new kakao.maps.LatLng(37.62759, 126.92315),
            level: 5
          };
  
          const map = new window.kakao.maps.Map(container, options);

          //마커가 표시 될 위치
          let markerPosition = new kakao.maps.LatLng(
            37.62759,
            126.92315
          );

          // 마커를 생성
          let marker = new kakao.maps.Marker({
            position: markerPosition,
          });

          // 마커를 지도 위에 표시
          marker.setMap(map);

            let content = '<div class="wrap">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            카카오 스페이스닷원' +
                '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body" style="background-color: whitesmoke">' +
                '            <div class="img">' +
                '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
                '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
                '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
            let overlay = new kakao.maps.CustomOverlay({
                content: content,
                map: map,
                position: marker.getPosition()
            });

            // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                overlay.setMap(map);
            });

            // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
            function closeOverlay() {
                overlay.setMap(null);
            }
        });
        
      };
      
    }
    render(){
        return(
            <>
            <Maps id="map">
            </Maps>
            </>
        )
    }
}
const Maps = styled.div`
width: 1900px;
height: 600px;
`;

// const Head = styled.h1`
// text-align: center;
// `

export default Map2;