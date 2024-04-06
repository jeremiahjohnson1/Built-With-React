import React from "react";
import "./App.css";
import Accordion from "./Components/Accordion/Index";
import Random_Color_Generator from "./Components/Color-Generator/Index";

function App() {
  return (
    <>
      <div className="App">
        <Accordion />
      </div>
      <div>
        <Random_Color_Generator/>
      </div>
    </>
  );
}

export default App;
