import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import img from "./eco2.png";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const navigate = useNavigate();
  const onNewLink = (e) => {
    const link = e.target.innerHTML;
    if (link === "E-Waste") {
      console.log("ol");
      navigate("/E-waste");
    } else if (link === "Food-Waste") {
      navigate("/Food-Waste");
    } else if (link === "About") {
      navigate("/About");
    } else if (link === "Clothes-Donation") {
      navigate("/Clothes");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="nav">
      <div className="logo">
        <img
          onClick={(e) => {
            onNewLink(e);
          }}
          src={img}
          alt=""
        />
      </div>

      <div className="links">
        {["E-Waste", "Food-Waste", "Clothes-Donation", "About"].map(
          (item, index) => (
            <a
              onClick={(e) => {
                onNewLink(e);
              }}
              key={index}
              className={`a-link ${index === 4 && "ml-12"}`}
            >
              {item}
            </a>
          )
        )}
      </div>

      <div className="login-signup">
        <button onClick={() => navigate("/select")}>Contribute</button>
      </div>
      <CgProfile onClick={() => navigate("/Dashboard")} className="Profile" />
    </div>
  );
};

export default Navbar;
