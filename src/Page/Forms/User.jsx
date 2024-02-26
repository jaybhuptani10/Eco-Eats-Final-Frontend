import React from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
import { ToastContainer, toast } from "react-toastify";

const User = () => {
  const navigate = useNavigate();

  return (
    <div className="containerr">
      <div className="left">
        <h1>Fill up the details to Recycle your E-waste</h1>
        <div className="form">
          <form action="">
            <input type="text" name="" placeholder="E-waste type" id="" />
            <input type="text" name="" placeholder="How old it is?" id="" />
            <input
              type="text"
              placeholder="Describe Your E-waste in detail"
              name=""
              id=""
            />
            <input type="text" placeholder="Pickup Address" />
            <input type="telephone" placeholder="Contact Number" />
            <button onClick={() => navigate("/Submit")}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
