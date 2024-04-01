import React from "react";
import "./dashboard.css";
import { motion } from "framer-motion";
import IMG from "./truck.png";
const ContributeFood = () => {
  const onSubmitClick = () => {
    setTimeout(() => {}, 2000);
    variants = {
      open: { opacity: 1, x: 0 },
      close: { opacity: 0, x: "100%" },
    };
  };
  return (
    <div className="Contribute">
      <form className="forms" action="">
        <label htmlFor="Hy">
          Food Description
          <input
            className="entry"
            type="text"
            name="type"
            placeholder="E-waste type"
            id=""
          />
        </label>

        <label htmlFor="">
          Food Quantity
          <input
            className="entry"
            type="text"
            placeholder="Describe Your E-waste in detail"
            name=""
            id=""
          />
        </label>
        <label htmlFor="">
          Pickup Address{" "}
          <input
            className="entry"
            name="address"
            type="text"
            placeholder="Pickup Address"
          />
        </label>
        <label htmlFor="">
          Pickup Time
          <input
            className="entry"
            type="datetime-local"
            name="pickupTime"
            placeholder="Pickup Time"
            id=""
          />
        </label>
        <label htmlFor="">
          Any message for agent{" "}
          <input className="entry" type="text" name="" id="" />
        </label>
        <label htmlFor="">
          Upload a pic of your Food
          <input type="file" name="" id="" />
        </label>
        <button className="contributebtn" onClick={() => onSubmitClick()}>
          Submit
        </button>
      </form>
      <motion.img className="ok" src={IMG} alt="" />
    </div>
  );
};

export default ContributeFood;
