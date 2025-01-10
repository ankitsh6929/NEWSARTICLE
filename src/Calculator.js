import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import Confetti from "react-confetti";

const Calculator = () => {
  const [ds, setDs] = useState("0");
  const [cf, setCf] = useState(false);

  const handleButtonClick = (val) => {
    if (val === "AC") {
      setDs("0");
      setCf(false);
    } else if (val === "=") {
      try {
        if (ds.includes("99") && ds.includes("33")) {
          setCf(true);
        }
        setDs(eval(ds).toString());
      } catch {
        setDs("Error");
      }
    } else {
      setDs((prev) => (prev === "0" ? val : prev + val));
    }
  };

  return (
    <div className="calculator">
      {cf && <Confetti />}
      <Display val={ds} />
      <div className="button-grid">
        {["AC", "MC", "M+", "M-", "MR", "/", "*", "-", "+", "=", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."].map((btn) => (
          <Button key={btn} label={btn} onClick={() => handleButtonClick(btn)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;