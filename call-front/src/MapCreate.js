import React from "react";

class MapCreate extends React.Component {
    map;
    maker;
    iwRemoveable;
    infowindow;
    MapTypeControl;
    zoomControl;
    iwContent;
    infowindow;
    markers = [];

    

    mapTypeControl = () => {
      this.MapTypeControl = new window.kakao.maps.MapTypeControl();
      this.map.addControl(this.MapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
      this.zoomControl = new window.kakao.maps.ZoomControl();
      this.map.addControl(this.zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    }

    displayMaker = () => {

      const { AnimalPharmacyData } = this.props;
      AnimalPharmacyData.forEach((element) => {
        this.maker = new window.kakao.maps.Marker({
            map: this.map,
            position: new window.kakao.maps.LatLng(element.lat, element.lng),
           
        });


        this.iwContent = `<div ><p>${element.title}<p></div>`;

        this.infowindow = new window.kakao.maps.InfoWindow({
          position: new window.kakao.maps.LatLng(element.lat, element.lng),
          content :  this.iwContent
        })

        this.infowindow.open(this.map, this.marker);

        this.markers.push(this.marker);

		    window.kakao.maps.event.addListener(this.marker, 'mouseover', this.makeOverListener(this.map, this.marker, this.infowindow));
        window.kakao.maps.event.addListener(this.marker, 'mouseout', this.makeOutListener(this.infowindow));
    
        window.clusterer.addMarkers(this.markers);

      
      });
    }

    makeOverListener = (map, marker, infowindow)  => {
      return function () {
        infowindow.open(map, marker);
      };
    }

    makeOutListener = (infowindow) => {
      return function () {
        infowindow.close();
      };
    }

    mapScript = () => {
        const { AnimalPharmacyData } = this.props;
       
        let container = document.getElementById("Mymap");
    
        let option = {
          center: new window.kakao.maps.LatLng(AnimalPharmacyData[1].lat, AnimalPharmacyData[1].lng),
          level: 3,   
        };

        this.map = new window.kakao.maps.Map(container, option);
        this.displayMaker();
        this.setBound();
        this.mapTypeControl();
    }

    setBound = () => {
      const { AnimalPharmacyData } = this.props;
        
      let bounds = new window.kakao.maps.LatLngBounds();
      

      for(var i=1; i<AnimalPharmacyData.length; i++){
        bounds.extend(new window.kakao.maps.LatLng(AnimalPharmacyData[i].lat,AnimalPharmacyData[i].lng))

      }
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정

      this.map.setBounds(bounds);      
    }

  componentDidMount() {
    this.mapScript();
  }

  render() {
    const{AnimalPharmacyData} = this.props;
    console.log(AnimalPharmacyData);

    return (
    <div style={{height:"100%"}}>
      <p>MENU</p>
      <div id="Mymap" style={{ width: "100%", height: "700px" }}></div>
    </div>
    )
  }
}

export default MapCreate;