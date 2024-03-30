import React from "react";
import "./clothes.css";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar/Navbar";
import IMG from "./c1.png";
import IMG2 from "./sun.png";
import IMG3 from "./c2.png";
import TextBox1 from "./TextBox1";
import IMG4 from "./c3.png";
import IMG5 from "./c4.png";
import IMG6 from "./c5.png";
import { useState } from "react";
import TextBox2 from "./TextBox2";
import TextBox3 from "./TextBox3";
import { useNavigate } from "react-router-dom";

const Clothes = () => {
  const navigate = useNavigate();
  const [Option1, setOption1] = useState(true);
  const [Option2, setOption2] = useState(false);
  const [Option3, setOption3] = useState(false);
  const [buttonSelected, setButtonSelected] = useState("How to Donate");
  const onButtonClick = (e) => {
    const buttonText = e.target.innerHTML;
    setButtonSelected(buttonText);
    if (e.target.innerHTML === "How to Donate") {
      setOption1(true);
      setOption2(false);
      setOption3(false);
    } else if (e.target.innerHTML === "What EcoEats do") {
      setOption1(false);
      setOption2(true);
      setOption3(false);
    } else if (e.target.innerHTML === "FAQS") {
      setOption1(false);
      setOption2(false);
      setOption3(true);
    }
  };
  return (
    <motion.div className="Clothes-Page">
      <Navbar className="nav" />
      <div className="Page-1">
        <div className="heading-text">
          <h1 className="anta-regular">Donate your old clothes</h1>
          <p className="anta-regular">EcoEats.</p>
        </div>
        <div className="image">
          <img src={IMG} alt="" />
        </div>
      </div>
      <div className="cards-collection">
        <div className="Cardds-1 card-single">
          <div className="img">
            {" "}
            <img src={IMG2} alt="" />
          </div>

          <h1>Donate</h1>
        </div>
        <div className="Cardds-2 card-single">
          <div className="photos">
            <img src={IMG4} alt="" />
            <img src={IMG3} alt="" />
            <img src={IMG5} alt="" />
            <img src={IMG6} alt="" />
          </div>

          <h1>Clothes</h1>
        </div>
        <div className="Cardds-3 card-single">
          <div onClick={() => navigate("/Donate")} className="buttondiv">
            Now
          </div>
        </div>
      </div>
      <div className="about-donation">
        <div className="options">
          <div
            onClick={onButtonClick}
            className={`option option1 ${Option1 === true && "activeoption"}`}
          >
            <h1>How to Donate</h1>
          </div>
          <div
            onClick={onButtonClick}
            className={`option option2 ${Option2 === true && "activeoption"}`}
          >
            <h1>What EcoEats do</h1>
          </div>
          <div
            onClick={onButtonClick}
            className={`option option3 ${Option3 === true && "activeoption"}`}
          >
            <h1>FAQS</h1>
          </div>
        </div>
        {buttonSelected === "How to Donate" ? (
          <TextBox1 />
        ) : buttonSelected === "What EcoEats do" ? (
          <TextBox2 />
        ) : (
          <TextBox3 />
        )}
      </div>
    </motion.div>
  );
};

export default Clothes;
