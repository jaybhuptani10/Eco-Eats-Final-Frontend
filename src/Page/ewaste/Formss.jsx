import React from "react";
import "./form.css";
const Formss = () => {
  return (
    <div className="full">
      <div className="left-form"></div>
      <div className="info-form">
        <div className="Text">
          <h1>Fill the Form Here</h1>
          <p>We need your accurate address to pick E-Waste from Your Home</p>
        </div>
        <div className="inputs">
          <input type="text" name="" placeholder="First NAME" id="" />
          <input type="text" name="" placeholder="Last Name" id="" />
          <input type="text" name="" placeholder="E-Waste Type" id="" />
          <input
            type="text"
            name=""
            placeholder="How old is your product"
            id=""
          />
          <input type="tel" name="" placeholder="Contact Number" id="" />
          <input type="text" name="" placeholder="Address Line 1" id="" />
          <input type="text" name="" placeholder="Address Line 2" id="" />
          <input type="number" name="" placeholder="Pincode" id="" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Formss;
