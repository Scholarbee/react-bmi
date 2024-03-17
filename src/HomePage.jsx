import React, { useState } from "react";
import Result from "./assets/Result";

/**
 *
 * @returns
 */
function HomePage() {
  var [height, setHeight] = useState(1);
  var [weight, setWeight] = useState(0);

  let bmi = 0;

  if (height != 1 && weight != 0 && height) {
    bmi = weight / (height / 100) ** 2;
  }else{bmi=0}

  return (
    <div className="d-flex bg-primary vh-100 justify-content-center align-items-center p-4 row">
      <div className="bg-white b-1 rounded p-3 col-lg-7 col-md-8">
        <h3 className="title">BMI Calcutlator</h3>
        <div className="row">
          <div className="form-group col-lg-6">
            <label htmlFor="">Weight(kg)</label>
            <input
              className="form-control  mb-4"
              type="text"
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight in kg"
            />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="">Height(cm)</label>
            <input
              className="form-control mb-4"
              type="text"
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height in cm"
            />
          </div>
        </div>
        {bmi != 0 && <Result bmi={bmi} />}
      </div>
    </div>
  );
}

export default HomePage;
