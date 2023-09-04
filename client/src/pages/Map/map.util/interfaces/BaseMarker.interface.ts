import HiltonMarker from "./HiltonMarker.interface";
import LatLang from "./LatLang.interface";

export default interface BaseMarker {
  basename: string;
  latlang: LatLang;
  hiltonsMarkers: Array<HiltonMarker>;
  baseZoomLevel: number;
}
