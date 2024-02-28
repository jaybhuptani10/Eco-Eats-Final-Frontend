import React from "react";
import "./user.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
const Formselect = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="nav" />
      <div className="Select-Page">
        <div onClick={() => navigate("/form")} className="E-waste Page-">
          <h1>Recycle your E-waste quickly and efficiently </h1>
          <p>
            Just fill up the form at wait until a Recycler picks up your e-waste
            from your doorsteps
          </p>
          <button>Continue with E-Waste</button>
        </div>
        <div
          onClick={() => navigate("/Donate")}
          className="Food Donation or Cloth Donation Page-"
        >
          <h1>Donating Food made simple.</h1>
          <p>
            Fill up the details and nearest NGO's will pickup the food from the
            provided address.
          </p>
          <button className="foodbut">Continue with your Food Donation</button>
        </div>
      </div>
    </>
  );
};

export default Formselect;
