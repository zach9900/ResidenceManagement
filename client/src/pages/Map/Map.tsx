import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { bases, mapOptions } from "./map.util/mapConst.util";
import {
  resetPosition,
  onBaseClick,
  onHiltonClick,
} from "./map.util/mapFunctions.util";
import BaseMarker from "./map.util/interfaces/BaseMarker.interface";
import View from "./map.util/View.enum";

function Map({
  initView,
  initBasename,
}: {
  initView: View;
  initBasename: string;
}) {
  const [mapInstance, setMapInstance] = useState<google.maps.Map>();
  const [view, setView] = useState<View>(initView);
  const [basename, setBasename] = useState<string>(initBasename);
  const [markers, setMarkers] = useState<Array<BaseMarker>>([]);

  useEffect(() => {
    setMarkers(
      initView === View.IAF
        ? bases
        : bases.filter((base) => base.basename === basename)
    );
  }, []);

  useEffect(() => {
    if (initView === View.BASE) {
      const base = bases.filter((base) => base.basename === basename)[0];

      const basePosition = base.latlang;

      const baseZoom = base.baseZoomLevel;

      mapInstance?.panTo(basePosition);
      mapInstance?.setZoom(baseZoom);
    }
  }, [mapInstance]);

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
          onRightClick={() => resetPosition(mapInstance, setView)}
          onLoad={onMapLoad}
          options={mapOptions}
          mapContainerStyle={{ height: "100vh", width: "100vw" }}
        >
          {view === View.IAF
            ? markers.map((base) => (
                <MarkerF
                  key={JSON.stringify(base.latlang)}
                  position={base.latlang}
                  onClick={(e: google.maps.MapMouseEvent) =>
                    onBaseClick(
                      e,
                      base.baseZoomLevel,
                      base.basename,
                      mapInstance,
                      setView,
                      setBasename
                    )
                  }
                />
              ))
            : markers
                .filter((base) => base.basename === basename)[0]
                .hiltonsMarkers.map((hilton) => (
                  <MarkerF
                    key={JSON.stringify(hilton.latlang)}
                    position={hilton.latlang}
                    onClick={() =>
                      onHiltonClick(hilton.hiltonNumber, markers[0].basename)
                    }
                  />
                ))}
        </GoogleMap>
      )}
    </div>
  );
}

export default Map;