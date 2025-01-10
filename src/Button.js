import React from "react";

const Button = ({ label, onClick }) => (
  <button className="calculator-button" onClick={onClick}>
    {label}
  </button>
);

export default Button;