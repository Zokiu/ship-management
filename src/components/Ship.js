const Ship = ({ ship, handleDelete }) => {
  return (
    <div>
      <h2>{ship.name}</h2>
      <h3>Vertical Sail: {ship.verticalSail} </h3>
      <h3>Horizontal Sail {ship.horizontalSail} </h3>
      <button onClick={() => handleDelete(ship.id)}>Delete</button>
    </div>
  );
};

export default Ship;
