import React from "react";
import "./App.css";
import Floor from "./pages/Floor/Floor";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RoomViewModal from "./components/roomViewModal/RoomViewModal";
import Map from "./pages/Map/Map";
import View from "./pages/Map/map.util/View.enum";

function App() {
  return (
    <div className="App">
      <Map initView={View.IAF} initBasename="" />
      {/*<Floor />*/}
    </div>
  );
}

export default App;
