function postReducer(state, action) {
  switch (action.type) {
    case "ADD_SHIP": {
      const addNewShip = action.payload.newShip;
      return { ships: [addNewShip, ...state.ships] };
    }
    case "DELETE_SHIP": {
      const deletedShipId = action.payload.id;
      return { ships: state.ships.filter((ship) => ship.id !== deletedShipId) };
    }
    case "EDIT_SHIP": {
      const editShipId = action.payload.id;
    }
    default:
      return state;
  }
}

export default postReducer;
