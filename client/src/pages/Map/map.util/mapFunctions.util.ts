import View from "./View.enum";
import LatLang from "./interfaces/LatLang.interface";
import { center, initZoom } from "./mapConst.util";

function onBaseClick(
  e: google.maps.MapMouseEvent,
  baseZoomLevel: number,
  basename: string,
  mapInstance: google.maps.Map | undefined,
  setView: Function,
  setBasename: Function
) {
  setBasename(basename);
  setView(View.BASE);
  const latlang: LatLang | undefined = e.latLng?.toJSON();

  setTimeout(function () {
    latlang && mapInstance?.panTo(latlang);
  }, 10);

  setTimeout(function () {
    if (mapInstance && mapInstance.getZoom()) {
      const curZoom = mapInstance.getZoom();
      smoothZoom(mapInstance, baseZoomLevel, curZoom ?? 0.25, 0.25);
    }
  }, 350);
}

function resetPosition(
  mapInstance: google.maps.Map | undefined,
  setView: Function
) {
  setView(View.IAF);
  mapInstance?.panTo(center);
  mapInstance?.setZoom(initZoom);
}

function smoothZoom(
  map: google.maps.Map,
  max: number,
  count: number,
  rate: number
) {
  if (count >= max) {
    return;
  } else {
    google.maps.event.addListenerOnce(
      map,
      "zoom_changed",
      function (event: google.maps.MapsEventListener) {
        smoothZoom(
          map,
          max,
          count + rate > max ? count + rate / 3 : count + rate,
          count + rate > max ? rate / 2 : rate
        );
      }
    );
    setTimeout(function () {
      map.setZoom(count);
    }, 70);
  }
}

function onHiltonClick(hiltonNumber: Number, basename: string) {
  console.log(
    "back will never start the work but imagine getting some data of hilton " +
      hiltonNumber +
      " at base : " +
      basename
  );
}

export { onBaseClick, onHiltonClick, resetPosition };
