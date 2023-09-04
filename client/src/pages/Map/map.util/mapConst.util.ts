import BaseMarker from "./interfaces/BaseMarker.interface";
import HiltonMarker from "./interfaces/HiltonMarker.interface";
import LatLang from "./interfaces/LatLang.interface";

const techniHiltons: Array<HiltonMarker> = [
  {
    hiltonNumber: 192,
    latlang: { lat: 32.81199779224437, lng: 35.04780115913235 },
  },
  {
    hiltonNumber: 191,
    latlang: { lat: 32.81156559248248, lng: 35.04753050396456 },
  },

  {
    hiltonNumber: 190,
    latlang: { lat: 32.81117130314693, lng: 35.04807181430014 },
  },

  {
    hiltonNumber: 198,
    latlang: { lat: 32.81173240667476, lng: 35.0469982154679 },
  },
];

const telNofHiltons: Array<HiltonMarker> = [
  {
    hiltonNumber: 1,
    latlang: { lat: 31.826902219822223, lng: 34.82395806622432 },
  },
  {
    hiltonNumber: 2,
    latlang: { lat: 31.82696990044384, lng: 34.824280489584844 },
  },

  {
    hiltonNumber: 3,
    latlang: { lat: 31.826637942633955, lng: 34.82409462200055 },
  },

  {
    hiltonNumber: 4,
    latlang: { lat: 31.826699177659556, lng: 34.82444739108911 },
  },
];

const oovdaHiltons: Array<HiltonMarker> = [
  {
    hiltonNumber: 1,
    latlang: { lat: 29.93170157117867, lng: 34.953771907503146 },
  },
  {
    hiltonNumber: 2,
    latlang: { lat: 29.93161031692416, lng: 34.954134603694946 },
  },

  {
    hiltonNumber: 3,
    latlang: { lat: 29.931174323216727, lng: 34.954041004684015 },
  },

  {
    hiltonNumber: 4,
    latlang: { lat: 29.93123515966267, lng: 34.953584709505705 },
  },
];

const bases: Array<BaseMarker> = [
  {
    basename: "techni",
    hiltonsMarkers: techniHiltons,
    latlang: { lat: 32.81165754658413, lng: 35.04819374892176 },
    baseZoomLevel: 18.3,
  },
  {
    basename: "ovda",
    hiltonsMarkers: oovdaHiltons,
    latlang: { lat: 29.93145869836534, lng: 34.95390596273884 },
    baseZoomLevel: 18.3,
  },
  {
    basename: "telnof",
    hiltonsMarkers: telNofHiltons,
    latlang: { lat: 31.826822281559476, lng: 34.824198159548004 },
    baseZoomLevel: 18.2,
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

export { bases, center, initZoom, mapOptions, techniHiltons };
