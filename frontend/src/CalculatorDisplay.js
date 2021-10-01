import React from "react";

const CalculatorDisplay = (props) => {
  return (
    <input
      className="calculator-display"
      value={props.text}
      readOnly={true} //attribut boléen non modifiable par le user
    />
  )
}
export default CalculatorDisplay;