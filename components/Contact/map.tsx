import React from "react";
import ReactMapGl from "react-map-gl";

const Map = () => {
  return (
    <ReactMapGl
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoiYWxlZXNhbGFtaSIsImEiOiJja3pjb3Jhcmwwa3EzMnVvNnRvaWQ4NW9vIn0.hL-oGb3TOjKVZhONbFlXaw"
    ></ReactMapGl>
  );
};

export default Map;
