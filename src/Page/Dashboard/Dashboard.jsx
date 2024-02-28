import React, { useEffect } from "react";
import "./dashboard.css";
import Navbar from "../../components/navbar/Navbar";
import Leftnav from "./Leftnav";
import Hero from "./Hero";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("auth"); // Assuming you store the token in localStorage upon login
  
    if (!token) {
      navigate("/Login");
    }
  }, []);
  const [data, setData] = useState([
    { name: "Rahul", age: 23, address: "Delhi", phone: "1234567890" },
    { name: "Sita", age: 25, address: "Mumbai", phone: "9876543210" },
    { name: "Gita", age: 22, address: "Bangalore", phone: "1234567890" },
    // ... add more data objects here
  ]);
  const [tabDashboard, setTabDashboard] = useState(true);
  const [tabEwaste, setTabEwaste] = useState(false);
  const [tabFood, setTabFood] = useState(false);
  const [tabClothes, setTabClothes] = useState(false);
  const [tabProfile, setTabProfile] = useState(false);

  const onTabSelected = (e) => {
    if (e.target.innerText === "Dashboard") {
      setTabDashboard(true);
      setTabEwaste(false);
      setTabFood(false);
      setTabClothes(false);
      setTabProfile(false);
    } else if (e.target.innerText === "E-Waste") {
      setTabDashboard(false);
      setTabEwaste(true);
      setTabFood(false);
      setTabClothes(false);
      setTabProfile(false);
    } else if (e.target.innerText === "Food Donation") {
      setTabDashboard(false);
      setTabEwaste(false);
      setTabFood(true);
      setTabClothes(false);
      setTabProfile(false);
    } else if (e.target.innerText === "Clothes Donation") {
      setTabDashboard(false);
      setTabEwaste(false);
      setTabFood(false);
      setTabClothes(true);
      setTabProfile(false);
    } else if (e.target.innerText === "Profile") {
      setTabDashboard(false);
      setTabEwaste(false);
      setTabFood(false);
      setTabClothes(false);
      setTabProfile(true);
    }
  };

  return (
    <div className="profile">
      <Navbar />
      <div className="Dashboard">
        <div className="left-nav">
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboard-item ${
              tabDashboard === true && "Dashboard-item-selected"
            } `}
          >
            Dashboard
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboard-item ${
              tabEwaste === true && "Dashboard-item-selected"
            } `}
          >
            E-Waste
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboard-item ${
              tabFood === true && "Dashboard-item-selected"
            } `}
          >
            Food Donation
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboard-item ${
              tabClothes === true && "Dashboard-item-selected"
            } `}
          >
            Clothes Donation
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboard-item ${
              tabProfile === true && "Dashboard-item-selected"
            } `}
          >
            Profile
          </div>
        </div>
        <div className="right-dashboard">
          {data.map((item, index) => (
            <Hero key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
