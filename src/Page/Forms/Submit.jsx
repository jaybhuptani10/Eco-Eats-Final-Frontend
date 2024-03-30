import React from "react";
import { TiTick } from "react-icons/ti";
import video from "./try.mp4";
import IMG from "./hmm.png";
import "./user.css";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const navigate = useNavigate();
  return (
    <div className="submit-page">
      <div className="left-card">
        <h1>Form Submitted!!!!</h1>
        <p>
          Thanks for fillup the form. We will contact you soon. Please check
        </p>
        <ul>
          <li>
            <TiTick className="icons" />
            Planet Protection
          </li>
          <li>
            <TiTick className="icons" />
            Climate Protection
          </li>
          <li>
            <TiTick className="icons" />
            Waste Reduction
          </li>
        </ul>
        <button onClick={() => navigate("/")} className="continue">
          Continue
        </button>
      </div>
      <div className="right-card">
        <img src={IMG} alt="" />
      </div>
    </div>
  );
};

export default Submit;
