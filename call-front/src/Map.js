// import React from 'react';
// import styled from "styled-components";

// /*global kakao*/

// class Map extends React.Component{

//     componentDidMount() {
//         const script = document.createElement("script");
//         script.async = true;
//         script.src =
//           "https://dapi.kakao.com/v2/maps/sdk.js?appkey=9a479b0eafcdbddcf0219e5a2018a610&libraries=LIBRARY";
//         document.head.appendChild(script);

//         script.onload = () => {
//         kakao.maps.load(() => {
//             let container = document.getElementById("map");
//             let options = {
//                 center: new kakao.maps.LatLng(37.62759, 126.92315),
//                 level: 5
//             };
  
//             const map = new window.kakao.maps.Map(container, options);

//             //마커가 표시 될 위치
//             let markerPosition = new kakao.maps.LatLng(
//                 37.62759,
//                 126.92315
//             );

//             // 마커를 생성
//             let marker = new kakao.maps.Marker({
//                 position: markerPosition,
//             });

//             function ov() {
//                 closeOverlay();
//             }

//             // 마커를 지도 위에 표시
//             marker.setMap(map);
//             let content = '<div class="wrap">' +
//                 '    <div class="info">' +
//                 '        <div class="title">' +
//                 '            카카오 스페이스닷원' +
//                 `            <div class="close" onclick="${ov()}" title="닫기" style="background-color: white; border-radius: 5px;">X</div>` +
//                 '        </div>' +
//                 '        <div class="body" style="background-color: whitesmoke; border-radius: 10px;">' +
//                 '            <div class="img" style="margin-left: 5px; margin-top: 10px;">' +
//                 '                <img src="./logo.svg" width="70" height="70">' +
//                 '            </div>' +
//                 '            <div class="desc">' +
//                 '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
//                 '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
//                 '                <button><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></button>' +
//                 '            </div>' +
//                 '        </div>' +
//                 '    </div>' +
//                 '</div>';
//             var overlay = new kakao.maps.CustomOverlay({
//                 content: content,
//                 map: map,
//                 position: marker.getPosition()
//             });

//             // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
//             function closeOverlay() {
//                 overlay.setMap(null);
//             }

//             // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
//             kakao.maps.event.addListener(marker, 'click', function() {
//                 overlay.setMap(map);
//             });
//         });
        
//       };
      
//     }
//     render(){
//         return(
//             <>
//             <Maps id="map">
//             </Maps>
//             </>
//         )
//     }
// }
// const Maps = styled.div`
// width: 1900px;
// height: 600px;
// `;

// // const Head = styled.h1`
// // text-align: center;
// // `

// export default Map;
