import React, { useState } from "react";

function Result(props) {
  let { bmi } = props;
  let [message, setMessage] = useState();

  if (bmi >= 30) {
    message = "You are obese";
  }
  else if (bmi >= 25) {
    message = "You are over weight";
  }
  else if (bmi >= 18) {
    message = "Your BMI is normal";
  }
  else if (bmi < 18) {
    message = "You are under weight";
  }


  return (
    <div>
      <h4>Result</h4>
      <h5>Hello, your BMI is {bmi.toFixed(2)}</h5>
      <p>{message}</p>
    </div>
  );
}

export default Result;
