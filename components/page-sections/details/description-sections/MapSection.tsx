import React from "react";
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

type Props = {};

const MapSection = (props: Props) => {
  return (
    <div className="bg-white rounded-lg shadow md:p-8 p-2">
      <p className="text-lg font-semibold text-slate-700 ">Location</p>
      <p className="text-slate-600 text-sm">
        15002 zengeza 3 extension Chitungwiza, Harare
      </p>
      <div className="flex bg-slate-100 rounded-lg w-full h-96 mt-6 overflow-hidden">
        <div className="bg-yellow-700 h-full w-full">
          <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            initialViewState={{
              longitude: -100,
              latitude: 40,
              zoom: 3.5,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <GeolocateControl
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            />
          </Map>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
