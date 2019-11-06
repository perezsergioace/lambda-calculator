import React from "react";

import "./styles.css"


export const OperatorButton = (props) => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className = "operator_button"
        onClick={() => props.setDisplayValue(props.operator)}
        >
        {props.operator}
      </button>}
    </>
  );
};
