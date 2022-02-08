import "./App.css";
import react, { useState } from "react";
import ShipData from "./components/ShipData";
import ShipStats from "./components/ShipStats";
import AddShip from "./components/AddShip";

function App() {
  const [ships, setShips] = useState(ShipData);
  const addShip = (newShip) => {
    console.log("added ship  " + newShip);
    setShips([newShip, ...ships]);
  };

  const handleDelete = (id) => {
    console.log(id + " ship id");
    setShips(ships.filter((ship) => ship.id !== id));
  };

  return (
    <div className="App">
      <h1>Ships</h1>
      <AddShip handleAdd={addShip} />
      <ShipStats ships={ships} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
