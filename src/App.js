import React, { useState } from "react";
import Navbar from "./components/Shared/Navbar";
import Overview from "./components/Dashboard/Overview";
import Footer from "./components/Shared/Footer";
import { DarkModeContext } from "./utils/localStorage";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Navbar />
        <Overview />
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
};

export default App;
