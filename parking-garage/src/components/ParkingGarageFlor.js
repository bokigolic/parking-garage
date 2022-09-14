const ParkingGarageFlor = (props) => {
  return (
    <div className="middle-flor">
      <header>
         {props.midleFlor === "florA" ? "A":"B"}
      </header>
      <div className="parking-spot-list">
        <div className="spot">
          example  12333

        </div>
      </div>

    </div>

  )
};
export default ParkingGarageFlor;