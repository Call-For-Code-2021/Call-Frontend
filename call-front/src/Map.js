import React from 'react';
import styled from "styled-components";

/*global kakao*/ 

class Map extends React.Component{

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
            center: new kakao.maps.LatLng(37.506502, 127.053617),
            level: 5
          };
  
          const map = new window.kakao.maps.Map(container, options);
       
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
width: 1200px;
height: 600px;
`;

// const Head = styled.h1`
// text-align: center;
// `

export default Map;