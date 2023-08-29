import LatLang from "./LatLang.interface";

const bases: Array<{
  basename: string;
  latlang: LatLang;
  baseZoomLevel: number;
}> = [
  {
    basename: "techni",
    latlang: { lat: 32.80934031024019, lng: 35.04753959711852 },
    baseZoomLevel: 16.8,
  },
  {
    basename: "ovda",
    latlang: { lat: 29.93898267746132, lng: 34.947156437010385 },
    baseZoomLevel: 16,
  },
  {
    basename: "tel nof",
    latlang: { lat: 31.83300080327341, lng: 34.81792590357436 },
    baseZoomLevel: 15.3,
  },
];

const center: LatLang = { lat: 31.4, lng: 35 };
const initZoom = 8.2;

const mapOptions: google.maps.MapOptions = {
  center: center,
  zoom: initZoom,
  disableDefaultUI: true,
  mapTypeId: "satellite",
  gestureHandling: "none",
};

export { bases, center, initZoom, mapOptions };
