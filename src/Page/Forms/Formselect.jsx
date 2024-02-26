import React from "react";
import "./user.css";
const Formselect = () => {
  return (
    <div className="Select-Page">
      <div className="E-waste">
        <h1>Recycle your E-waste quickly and efficiently </h1>
        <p>
          Just fill up the form at wait until a Recycler picks up your e-waste
          from your doorsteps
        </p>
        <button>Continue with E-Waste</button>
      </div>
      <div className="Food">
        <h1>Donating Food made simple.</h1>
        <p>
          Fill up the details and nearest NGO's will pickup the food from the
          provided address.
        </p>
        <button className="foodbut">Continue with your Food Donation</button>
      </div>
    </div>
  );
};

export default Formselect;
