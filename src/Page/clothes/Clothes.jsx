import React from "react";
import "./Clothes.css";
import Navbar from "../../components/navbar/Navbar";
import IMG from "./c1.png";
const Clothes = () => {
  return (
    <div className="Clothes-Page">
      <Navbar className="nav" />
      <div className="Page-1">
        <div className="heading-text">
          <h1 className="anta-regular">Donate your old clothes</h1>
          <p className="anta-regular">EcoEats.</p>
        </div>
        <div className="image">
          <img src={IMG} alt="" />
        </div>
        <div className="3-cards">
          <div className="card1"></div>
          <div className="card2"></div>
          <div className="card3"></div>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
