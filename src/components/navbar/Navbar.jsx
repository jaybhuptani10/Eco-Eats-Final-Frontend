import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import img from "./eco2.png";
import { CgProfile } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  const [open, close] = useState(true);
  const onMenuClick = () => {
    setMenu(!menu);
    close(!open);
  };
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
      {open == true ? (
        <CiMenuBurger onClick={() => onMenuClick()} className="menu" />
      ) : (
        <IoClose
          onClick={() => {
            onMenuClick();
          }}
          className="menu"
        />
      )}

      <div className={`links ${menu ? "open" : ""}`}>
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

        <CgProfile onClick={() => navigate("/Dashboard")} className="Profile" />
      </div>
    </div>
  );
};

export default Navbar;
