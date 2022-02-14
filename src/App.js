import "./App.css";
import React, { useState } from "react";
import ShipData from "./components/ShipData";
import ShipStats from "./components/ShipStats";
import AddShip from "./components/AddShip";
import postReducer from "./reducer";

export const ShipsContext = React.createContext({ ships: [] });

function App() {
  const intialShipsState = React.useContext(ShipsContext);
  const [state, dispatch] = React.useReducer(postReducer, intialShipsState);

  // const [ships, setShips] = useState(ShipData);

  return (
    <ShipsContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>Ships</h1>
        <AddShip />
        <ShipStats ships={state.ships} />
      </div>
    </ShipsContext.Provider>
  );
}

export default App;
