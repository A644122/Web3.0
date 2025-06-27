import React from "react";
// import Herosection from "./Components/Herosection";
import Links from "./Components/Links";
import Navbar from "./Components/Navbar";
import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="  md:border md:border-y-2 lg:border-red-900 lg:border border-red-950 lg:border-x-2  "></div>
      <Navbar />
      <Links />
    </>
  );
};

export default App;
