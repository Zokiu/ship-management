import React from "react";
import Ship from "./Ship";

const ShipStats = ({ ships }) => {
  return (
    <div>
      <h2>ShipStats</h2>
      {ships.map((ship) => (
        <Ship key={ship.id} {...ship} />
      ))}
    </div>
  );
};

export default ShipStats;
