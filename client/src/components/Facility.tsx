import React from "react";

function Facility({ icon }: { icon: string }) {
  return (
    <div className="icon-background">
      <img className="icon-image" src={icon} alt="icon" />
    </div>
  );
}

export default Facility;
