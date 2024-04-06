import React, { useState, useEffect } from "react";
import "./App.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Info from "./Info";
import { Icon } from "leaflet";
import StartIcon from "./assets/start.png";
import EndIcon from "./assets/end.png";
import FrameIcon from "./assets/Frame.png";

function App() {
  const coordinates = {
    startX: 22.1696,
    startY: 91.4996,
    endX: 22.2637,
    endY: 91.7159,
  };
  const startCoordinates = [22.1886, 91.5309];
  const endCoordinates = [22.2637, 91.7159];
  const [frameCoordinates, setFrameCoordinates] = useState(startCoordinates);

  useEffect(() => {
    const moveFrameIcon = () => {
      const frames = [];
      const dx = (endCoordinates[0] - startCoordinates[0]) / 100;
      const dy = (endCoordinates[1] - startCoordinates[1]) / 100;

      for (let i = 0; i <= 80; i++) {
        frames.push([
          startCoordinates[0] + dx * i,
          startCoordinates[1] + dy * i,
        ]);
      }

      let index = 0;
      const animate = () => {
        setFrameCoordinates(frames[index]);
        index++;
        if (index === frames.length) {
          index = 0;
          setTimeout(animate, 2000);
        } else {
          setTimeout(animate, 80);
        }
      };

      animate();
    };

    moveFrameIcon();
  }, []);

  const startIcon = new Icon({
    iconUrl: StartIcon,
    iconSize: [38, 38],
  });

  const endIcon = new Icon({
    iconUrl: EndIcon,
    iconSize: [38, 38],
  });

  const frameIcon = new Icon({
    iconUrl: FrameIcon,
    iconSize: [140, 78],
  });

  return (
    <>
      <Info coordinates={coordinates} />
      <MapContainer center={[22.240224, 91.677301]} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker
          position={[coordinates.startX, coordinates.startY]}
          icon={startIcon}
        ></Marker>
        <Marker position={endCoordinates} icon={endIcon}></Marker>
        <Marker position={frameCoordinates} icon={frameIcon}></Marker>
      </MapContainer>
    </>
  );
}

export default App;
