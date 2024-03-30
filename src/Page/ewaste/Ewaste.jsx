import React, { useLayoutEffect, useRef, useState } from "react";
import "./style.css";
import gsap from "gsap";
import Navbar from "../../components/navbar/Navbar";
import CardsContainer from "./CardsContainer";
import HarmfullEffects from "./HarmfullEffects";
import Solution from "./Solution"; // Import the Solution component

const Ewaste = () => {
  const comp = useRef(null);
  const [buttonSelected, setButtonSelected] = useState("What it is");

  const onButtonClick = (e) => {
    const buttonText = e.target.innerHTML;
    setButtonSelected(buttonText);
  };

  return (
    <>
      <Navbar className=".enav"></Navbar>
      <div ref={comp} className="E-screen">
        <div className="E-hero">
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
      </div>
    </>
  );
};

export default Ewaste;
