import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  Tooltip,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const MapaGeneralContainer = ({ coordenadas }) => {
  return (
    <div>
      <MapContainer
        center={[10.96854, -74.78132]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "80vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordenadas &&
          coordenadas.map((coordenada, key) => (
            <Circle
              key={key}
              center={coordenada.residencia}
              radius={8}
              color="green"
            />
          ))}
      </MapContainer>
    </div>
  );
};

export default MapaGeneralContainer;
