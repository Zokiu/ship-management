import React, { useState, useReducer, useContext, useRef } from "react";
import { ShipsContext } from "../App";

const AddShip = () => {
  const { dispatch } = React.useContext(ShipsContext);
  //state for input
  const [shipname, setShipname] = useState("");
  const [verticalSail, setVerticalSail] = useState(0);
  const [horizontalSail, setHorizontalSail] = useState(0);
  const inputShipName = useRef();
  const inputVerticalSail = useRef();
  const inputHorizontalSail = useRef();
  ///start
  //   const { name, value } = event.target;

  const handleSumbit = (event) => {
    event.preventDefault();
    let newShip = {
      id: Date.now(),
      name: shipname,
      verticalSail: verticalSail,
      horizontalSail: horizontalSail,
    };
    dispatch({ type: "ADD_SHIP", payload: { newShip } });

    inputShipName.current.value = "";
    inputVerticalSail.current.value = "";
    inputHorizontalSail.current.value = "";
  };

  return (
    <div>
      <h2>Add Ship</h2>
      <form onSubmit={handleSumbit}>
        <p>Ship name:</p>
        <input
          onChange={(event) => setShipname(event.target.value)}
          type="text"
          placeholder="Ship name"
          ref={inputShipName}
        />
        <p>Vertical Sail:</p>
        <input
          onChange={(event) => setVerticalSail(event.target.value)}
          type="number"
          placeholder="666"
          ref={inputVerticalSail}
        />
        <p>Horizontal Sail:</p>
        <input
          onChange={(event) => setHorizontalSail(event.target.value)}
          type="number"
          s
          placeholder="365"
          ref={inputHorizontalSail}
        />
        <div>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddShip;

//add ship
