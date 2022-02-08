import React, { useState } from "react";
import Button from "../shared/Button";

const AddShip = ({ handleAdd }) => {
  const [shipname, setShipname] = useState("");
  const [verticalSail, setVerticalSail] = useState(0);
  const [horizontalSail, setHorizontalSail] = useState(0);

  const shipnameChange = (event) => {
    setShipname(event.target.value);
  };
  const updateVerticalSail = (event) => {
    setVerticalSail(event.target.value);
  };
  const updateHorizontalSail = (event) => {
    setHorizontalSail(event.target.value);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    if (shipname.trim().length > 1) {
      console.log("handle submit");
      const newShip = {
        id: Date.now(),
        name: shipname,
        verticalSail: verticalSail,
        horizontalSail: horizontalSail,
      };
      handleAdd(newShip);
      setShipname("");
      setVerticalSail(0);
      setHorizontalSail(0);
    }
  };

  return (
    <div>
      <h2>Add Ship</h2>
      <form onSubmit={handleSumbit}>
        <p>Ship name:</p>
        <input
          value={shipname}
          onChange={shipnameChange}
          type="text"
          placeholder="Ship name"
        />
        <p>Vertical Sail:</p>
        <input
          value={verticalSail}
          onChange={updateVerticalSail}
          type="number"
          placeholder="666"
        />
        <p>Horizontal Sail:</p>
        <input
          value={horizontalSail}
          onChange={updateHorizontalSail}
          type="number"
          placeholder="365"
        />
        <Button></Button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddShip;

//add ship
