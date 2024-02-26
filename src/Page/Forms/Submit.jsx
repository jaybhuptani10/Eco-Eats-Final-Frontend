import React from "react";
import { TiTick } from "react-icons/ti";
import video from "./try.mp4";
import IMG from "./hmm.png";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const navigate = useNavigate();
  return (
    <div className="submit-page">
      <div className="left-card">
        <h1>Form Submitted!!!!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
          earum?
        </p>
        <ul>
          <li>
            <TiTick className="icons" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, unde!
          </li>
          <li>
            <TiTick className="icons" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, unde!
          </li>
          <li>
            <TiTick className="icons" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, unde!
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
