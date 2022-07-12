import React, { useState, useEffect } from "react";
import { MapContainer, useMap, Marker, Popup, Polyline, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "../App.css";
import geoLocation from "../Hooks/useGeoLocation";
import SimpleSlide from "../component/SlidingNavBar";
import Timer from "../component/Timer";

export default function RunTracker() {
  const [polyLine, setPolyLine] = useState([]);
  const [location, setLocation] = useState([]);
  const [distance, setDistance] = useState(0);
  const [start, setStart] = useState(false);
  let marker;


  const blackOptions = { color: "black" };

  function success(pos) {
    const crd = pos.coords;

    setLocation([crd.latitude, crd.longitude]);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  // const trackOptions = {
  //   enableHighAccuracy: true,
  //   maximumAge: 30000,
  //   timeout: 5000,
  // };



  function MapLayer() {
    const map = useMap();

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        minZoom: 4,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoidmFuZGFyc2luIiwiYSI6ImNsNTE0cDFlMDAyNHAzanFodWhnendrbDUifQ.Cn9XJ_LHFWB0G4gsgZe1Gw",
      }
    ).addTo(map);
  }

  var runIcon = L.icon({
    iconUrl: 'runIcon.png',

    iconSize:     [38, 45], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 65], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// var routingControl = L.Routing.control({
//   waypointMode: 'snap'
// });

// routingControl._router.route(location, function(err, waypoints) {
//   var a = waypoints;
// });


  return !location.length ? null : (
    <div className="runTracker">
      <div>
        <SimpleSlide />
      </div>
      <div>
        <MapContainer center={location} zoom={18} scrollWheelZoom={true}>
          {
            polyLine.length == 0 ? (
              <Marker position={location} icon={runIcon}>
            <Popup>
              Ha!!!!. <br /> I am not here Kevin.
            </Popup>
          </Marker>
            ):(
              <Marker position={polyLine[polyLine.length-1]}>
              <Popup>
                Ha!!!!. <br /> I am not here Kevin.
              </Popup>
            </Marker>
            )
          }
          <Polyline pathOptions={blackOptions} positions={polyLine} />
          <MapLayer />
         </MapContainer>
       </div>
      {/* <div>
        {polyLine.map((e, i) => {
          return (
            <div key={i}>
              lat:{e[0]}, lng:{e[1]}
            </div>
          );
        })}
      </div> */}
       <Timer
        start={start}
        distance={distance}
        setStart={setStart}
        setPolyLine={setPolyLine}
        setDistance={setDistance}
      />
     </div>
   );
}
