import React from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../../components/navbar/Navbar";
const Donate = () => {
  return (
    <div className="containerr">
      <Navbar />
      <div className="left">
        <h1 className="ok">Fill up the details to Donate Clothes and Food</h1>
      </div>
      <div className="formm">
        <form action="">
          <select onClick={(e) => onSelect(e)} name="type" id="">
            <option value="Food">Food</option>
            <option value="Clothes">Clothes</option>
          </select>
          <input
            className="inputt"
            type="datetime-local"
            name="pickupTime"
            placeholder="Pickup Time"
            id=""
          />
          <input
            className="inputt"
            type="text"
            placeholder="Describe Your E-waste in detail"
            name=""
            id=""
          />
          <input
            className="inputt"
            name="address"
            type="text"
            placeholder="Pickup Address"
          />
          <input
            className="inputt"
            type="telephone"
            name="phone"
            placeholder="Contact Number"
          />
          <input
            className="inputt"
            type="text"
            name="donortoAgentMsg"
            placeholder="Message to Recycler"
            id=""
          />
          <button className="submitt" onClick={() => navigate("/Submit")}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
