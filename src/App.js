import React from "react";
import "./App.css";
import Accordion from "./Components/Accordion/Index";
import Random_Color_Generator from "./Components/Color-Generator/Index";
import StarRating from "./Components/Star-Rating";

function App() {
  return (
    <>
      <div className="App">
        <Accordion />

        <Random_Color_Generator />

        <StarRating />
      </div>
    </>
  );
}

export default App;
