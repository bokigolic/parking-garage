import { useState } from "react";
import ParkingGarageFlor from "./ParkingGarageFlor";

/*Objectives
-
*/


const ParkingGarage = () => {

  const initialState = {
    flor1: {
      florA: [null, null, "test123", null, null, null, null, null, null, null],
      florB: [null, null, null, null, null, null, null, null, null, null]
    },
    flor2: {
      florA: ["BMW123", null, null, null, null, null, null, null, null, null],
      florB: [null, null, null, null, null, null, null, null, null, null]
    },
    flor3: {
      florA: [null, null, null, null, null, null, null, null, null, null],
      florB: [null, null, null, null, null, null, null, null, null, null]
    },
    flor4: {
      florA: [null, null, null, null, null, null, null, null, null, null],
      florB: [null, null, null, null, null, null, null, null, null, null]
    }
  };
  const [garage, setGarage] = useState(initialState);
  return (
    <div>
      <h3>Parking Garage</h3>
      <p>Display of parking spaces in the shopping center</p>
      <h3>Monitor Garage</h3>
      <div className="monitor-garage">
        <div className="flor">
          <header>Flor 1</header>
          <footer>
            <ParkingGarageFlor
              flor={"flor1"}
              midleFlor={"florA"}
              parkingSpace={garage.flor1.florA}
            />
            <ParkingGarageFlor
              flor={"flor1"}
              midleFlor={"florB"}
              parkingSpace={garage.flor1.florB}
            />
          </footer>
        </div>
        <div className="flor">
          <header>Flor 2</header>
          <footer>
            <ParkingGarageFlor
              flor={"flor2"}
              midleFlor={"florA"}
              parkingSpace={garage.flor2.florA}
            />
            <ParkingGarageFlor
              flor={"flor2"}
              midleFlor={"florB"}
              parkingSpace={garage.flor1.florB}
            />
          </footer>
        </div>
        <div className="flor">
          <header>Flor 3</header>
          <footer>
            <ParkingGarageFlor
              flor={"flor3"}
              midleFlor={"flor1"}
              parkingSpace={garage.flor3.florA}
            />
            <ParkingGarageFlor
              flor={"flor3"}
              midleFlor={"florB"}
              parkingSpace={garage.flor3.florB}
            />
          </footer>
        </div>
        <div className="flor">
          <header>Flor 4</header>
          <footer>
            <ParkingGarageFlor
              flor={"flor4"}
              midleFlor={"florA"}
              parkingSpace={garage.flor4.florA}
            />
            <ParkingGarageFlor
              flor={"flor4"}
              midleFlor={"florB"}
              parkingSpace={garage.flor4.florB}
            />
          </footer>
        </div>
      </div>
      <h3>Widget for prak new car</h3>
    </div >
  )
};
export default ParkingGarage;