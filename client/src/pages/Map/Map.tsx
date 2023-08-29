import React, { useCallback, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { bases, mapOptions } from "./map.util/mapConst.util";
import { resetPosition, onMarkerClick } from "./map.util/mapFunctions.util";

function Map() {
  const [mapInstance, setMapInstance] = useState<google.maps.Map>();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY ?? "",
  });

  const onMapLoad = useCallback((map: google.maps.Map) => {
    setMapInstance(map);
  }, []);

  return (
    <div>
      {isLoaded && (
        <GoogleMap
          onRightClick={() => resetPosition(mapInstance)}
          onLoad={onMapLoad}
          options={mapOptions}
          mapContainerStyle={{ height: "100vh", width: "100vw" }}
        >
          {bases.map((base) => (
            <MarkerF
              key={JSON.stringify(base.latlang)}
              position={base.latlang}
              onClick={(e: google.maps.MapMouseEvent) =>
                onMarkerClick(e, base.baseZoomLevel, mapInstance)
              }
            />
          ))}
        </GoogleMap>
      )}
    </div>
  );
}

export default Map;
