import React, { useState } from "react";
import "./style.css";

import Navbar from "../../components/navbar/Navbar";
import CardsContainer from "./CardsContainer";
import HarmfullEffects from "./HarmfullEffects";
import Solution from "./Solution"; // Import the Solution component
import { useEffect } from "react";
import Panel from "./Panel";

const Ewaste = () => {
  const [buttonSelected, setButtonSelected] = useState("What it is");

  const onButtonClick = (e) => {
    const buttonText = e.target.innerHTML;
    setButtonSelected(buttonText);
  };

  return (
    <div className="E-screen">
      <div className="E-hero">
        <h3>EcoEats</h3>
        <h1>E-WASTE :</h1>
        <span>
          Recycle, Renew,<span className="n-line">Reclaim, Restore</span>{" "}
        </span>
        <div className="butts">
          <div onClick={onButtonClick} id="a" className="divb">
            What it is
          </div>
          <div onClick={onButtonClick} id="b" className="divb">
            Harmful effects
          </div>
          <div onClick={onButtonClick} id="c" className="divb">
            Solution
          </div>
        </div>
      </div>

      {buttonSelected === "Harmful effects" ? (
        <HarmfullEffects />
      ) : buttonSelected === "Solution" ? (
        <Solution />
      ) : (
        <CardsContainer />
      )}
      <Panel />
    </div>
  );
};

export default Ewaste;
