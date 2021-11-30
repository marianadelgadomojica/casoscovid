import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const IconoTrabajo = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2344/2344103.png",

  iconSize: [35, 35],
});
const IconoResidencia = L.icon({
  iconUrl:
    "https://cdn1.iconfinder.com/data/icons/real-estate-84/64/x-24-512.png",

  iconSize: [35, 35],
});

const MapaBusqueda = ({ coordenadas }) => {
  return (
    <div>
      <MapContainer
        center={[10.96854, -74.78132]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordenadas && (
          <>
            <Marker
              position={coordenadas.residencia}
              icon={IconoResidencia}
              title="Residencia"
            ></Marker>
            <Marker position={coordenadas.trabajo} icon={IconoTrabajo}></Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default MapaBusqueda;
