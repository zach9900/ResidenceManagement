import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { bases, initZoom, mapOptions } from "./map.util/mapConst.util";
import {
  resetPosition,
  onBaseClick,
  getHiltonData,
} from "./map.util/mapFunctions.util";
import BaseMarker from "./map.util/interfaces/BaseMarker.interface";
import View from "./map.util/View.enum";
import { basesImages } from "./map.util/basesImages/basesImages";
import hiltonIcon from "./map.util/basesImages/marker.png";
import Popup from "../../components/hiltonPopup/Popup";
import HiltonMarker from "./map.util/interfaces/HiltonMarker.interface";
import { AnimatePresence } from "framer-motion";
import Floor from "../Floor/Floor";
import Hilton from "../../interfaces/hilton.interface";
import { emptyHilton } from "../../constants/mock/Hilton.mock";

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
  const [zoom, setZoom] = useState<number>(initZoom);
  const [hiltonPopUp, setHiltonPopUp] = useState<Hilton>(emptyHilton);
  const [hiltonPressed, setHiltonPressed] = useState<Hilton>(emptyHilton);

  useEffect(() => {
    console.log(hiltonPressed);
  }, [hiltonPressed]);

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

  function onHiltonClick(hilton: HiltonMarker, basename: string) {
    setHiltonPopUp(emptyHilton);
    setHiltonPressed(getHiltonData(hilton.hiltonNumber, basename));
  }

  function closeFloorPage() {
    setHiltonPressed(emptyHilton);
  }

  return (
    <div>
      {isLoaded && (
        <GoogleMap
          onZoomChanged={() => {
            setZoom(mapInstance?.getZoom() ?? 0);
          }}
          onRightClick={() => resetPosition(mapInstance, setView)}
          onLoad={onMapLoad}
          options={mapOptions}
          mapContainerStyle={{ height: "100vh", width: "100vw" }}
        >
          {view === View.IAF
            ? markers.map((base) => (
                <MarkerF
                  icon={
                    basesImages.find(
                      ({ basename, url }) => basename === base.basename
                    )?.url
                  }
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
            : zoom > 16.5 &&
              markers
                .filter((base) => base.basename === basename)[0]
                .hiltonsMarkers.map((hilton) => (
                  <MarkerF
                    icon={hiltonIcon}
                    key={JSON.stringify(hilton.latlang)}
                    position={hilton.latlang}
                    onClick={() => onHiltonClick(hilton, basename)}
                    onMouseOver={() =>
                      setHiltonPopUp(
                        getHiltonData(hilton.hiltonNumber, basename)
                      )
                    }
                    onMouseOut={() => setHiltonPopUp(emptyHilton)}
                  />
                ))}
          <AnimatePresence>
            {hiltonPopUp.hiltonNumber && <Popup hilton={hiltonPopUp} />}
            {hiltonPressed.hiltonNumber && (
              <Floor
                initHilton={hiltonPressed}
                closeFloorPage={closeFloorPage}
              />
            )}
          </AnimatePresence>
        </GoogleMap>
      )}
    </div>
  );
}

export default Map;
