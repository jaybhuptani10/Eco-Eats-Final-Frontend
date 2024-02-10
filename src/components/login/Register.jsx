import React, { useState } from "react";
import "./sttle.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Register = ({ data, onTabChange }) => {
  const navigate = useNavigate();
  const onNew = () => {
    navigate("/Login");
  };
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div className="app">
      <h1>REGISTER</h1>
      <div className="Container">
        <div className="up">
          <div className="switchingTabs">
            <div className="tabItems">
              {data.map((tab, index) => (
                <span
                  key={index}
                  className={`tabItem ${
                    selectedTab === index ? "active" : ""
                  } `}
                  onClick={() => {
                    activeTab(tab, index);
                  }}
                >
                  {tab}
                </span>
              ))}
              <span className="movingBg" style={{ left }}></span>
            </div>
          </div>
        </div>
        <div className="input">
          <input type="email" name="email" placeholder=" Email" id="email" />
          <input type="tel" name="" placeholder="Phonenum" id="phonenum" />
          <p>
            Verify your number <button className="button">Send OTP</button>
            <input type="number" name="" id="" />
            <button>Check</button>
          </p>
          <input type="password" name="" placeholder="Password" id="pass" />
          <button>Submit</button>
          <h3 onClick={() => onNew()}>Already A User? Sign In</h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
