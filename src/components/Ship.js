import React from "react";
import { ShipsContext } from "../App";

const Ship = ({ name, verticalSail, horizontalSail, id }) => {
  const { dispatch } = React.useContext(ShipsContext);

  function handleDelete() {
    dispatch({ type: "DELETE_SHIP", payload: { id } });
  }
  function handleEdit() {
    dispatch({ type: "EDIT_SHIP", payload: { id } });
  }

  return (
    <>
      <h2>{name}</h2>
      <h3>Vertical Sail: {verticalSail} </h3>
      <h3>Horizontal Sail {horizontalSail} </h3>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Ship;
