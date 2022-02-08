import React from "react";
import Ship from "./Ship";

const ShipStats = ({ ships, handleDelete }) => {
  return (
    <div>
      ShipStats
      {ships.map((ship) => (
        <Ship key={ship.id} ship={ship} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ShipStats;
