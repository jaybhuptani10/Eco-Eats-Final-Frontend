import React, { useLayoutEffect, useRef, useState } from "react";
import "./style.css";
import gsap from "gsap";
import Navbar from "../../components/navbar/Navbar";
import CardsContainer from "./CardsContainer";
import HarmfullEffects from "./HarmfullEffects";
import Solution from "./Solution"; // Import the Solution component
import { useEffect } from "react";
import Panel from "./Panel";

import { useGSAP } from "@gsap/react";
import Formss from "./Formss";

const Ewaste = () => {
  const [buttonSelected, setButtonSelected] = useState("What it is");

  const onButtonClick = (e) => {
    const buttonText = e.target.innerHTML;
    setButtonSelected(buttonText);
  };

  const comp = useRef(null);

  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".panel-screen", { x: 360 }); // <-- automatically reverted
    },
    { scope: comp }
  );

  return (
    <div ref={comp} className="E-screen">
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
      <Panel />
      <Formss />
    </div>
  );
};

export default Ewaste;
