import { useState } from "react";

/*Objectives
-
*/


const ParkingGarage = () => {

  const initialState = {
    flor1: {
      florA: [null, null, null, null, null, null, null, null, null, null],
      florB: [null, null, null, null, null, null, null, null, null, null]
    },
    flor2: {
      florA: [null, null, null, null, null, null, null, null, null, null],
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
    </div >
  )
};
export default ParkingGarage;