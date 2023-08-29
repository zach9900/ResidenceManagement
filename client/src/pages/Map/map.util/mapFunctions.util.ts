import LatLang from "./LatLang.interface";
import { center, initZoom } from "./mapConst.util";

function onMarkerClick(
  e: google.maps.MapMouseEvent,
  baseZoomLevel: number,
  mapInstance: google.maps.Map | undefined
) {
  const latlang: LatLang | undefined = e.latLng?.toJSON();

  setTimeout(function () {
    latlang && mapInstance?.panTo(latlang);
  }, 50);

  setTimeout(function () {
    if (mapInstance && mapInstance.getZoom()) {
      const curZoom = mapInstance.getZoom();
      smoothZoom(mapInstance, baseZoomLevel, curZoom ?? 0, 0.5);
    }
  }, 600);
}

function resetPosition(mapInstance: google.maps.Map | undefined) {
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
        console.log(count, rate, max);

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
    }, 110);
  }
}

export { onMarkerClick, resetPosition };
