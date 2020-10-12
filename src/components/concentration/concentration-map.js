import React from "react";
import { Map, Polyline, GoogleApiWrapper } from "google-maps-react";
import { googleApiKey } from "./apiKey.js";

function ConcentrationMap({ google, data }) {
  const containerStyle = {
    position: "relative",
    width: 512,
    height: 512,
  };
  return (
    <Map google={google} containerStyle={containerStyle} zoom={1} minZoom={1}>
      <Polyline
        path={data}
        strokeColor="#0000FF"
        strokeOpacity={0.8}
        strokeWeight={2}
      />
    </Map>
  );
}

ConcentrationMap = GoogleApiWrapper({
  apiKey: googleApiKey,
})(ConcentrationMap);

export { ConcentrationMap };
