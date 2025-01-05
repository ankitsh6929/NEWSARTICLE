import React, { useContext } from "react";
import { DarkModeContext } from "../../utils/localStorage";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <nav>
      <h1>Dashboard</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
