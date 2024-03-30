import React, { useEffect } from "react";
import "./dashboard.css";
import Navbar from "../../components/navbar/Navbar";

import Hero from "./Hero";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IMG from "./donation.png";
import IMG2 from "./electro.png";
import IMG3 from "./Food.png";
import IMG4 from "./clothes.png";
import Contribute from "./Contribute";
import Profile from "./Profile";
import ContributeFood from "./ContributeFood";
import ContributeClothes from "./ContributeClothes";
const Dashboard = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem("auth"); // Assuming you store the token in localStorage upon login

  //   if (!token) {
  //     navigate("/Login");
  //   }
  // }, []);
  const [main, setmain] = useState([
    {
      count: 3,
      name: "Total Donations",
      img: IMG,
    },

    {
      count: 1,
      name: "E-waste Donations",
      img: IMG2,
    },
    {
      count: 1,
      name: "Food Donations",
      img: IMG3,
    },
    {
      count: 1,
      name: "Cloths Donations",
      img: IMG4,
    },
  ]);
  const [ewaste, setewaste] = useState([
    {
      Name: "Batteries",
      Quantity: 2,
      Address: "Delhi",
      Pickup: "27 January 2023",
      time: "10:00 AM",
      msg: "Batteries are harmful for the environment, please dispose them properly",
    },
  ]);
  const [data, setData] = useState([
    {
      Type: "E-waste",
      "Pickup Time": "27 January 2023",
      address: "Delhi",
      phone: "1234567890",
    },
    {
      Type: "Food DOnation",
      "Pickup Time": "28 January 2023",
      address: "Delhi",
      phone: "1264567890",
    },
    {
      Type: "Clothes Donation",
      "Pickup Time": "20 January 2023",
      address: "Ahmeabad",
      phone: "1264567890",
    },
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
    } else if (e.target.innerText === "New Requests") {
      setTabDashboard(false);
      setTabEwaste(true);
      setTabFood(false);
      setTabClothes(false);
      setTabProfile(false);
    } else if (e.target.innerText === "Accepted") {
      setTabDashboard(false);
      setTabEwaste(false);
      setTabFood(true);
      setTabClothes(false);
      setTabProfile(false);
    } else if (e.target.innerText === ">Pending") {
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
          {tabDashboard && <Hero data={main} />}
          {tabEwaste && <Contribute />}
          {tabFood && <ContributeFood />}
          {tabClothes && <ContributeClothes />}
          {/*{tabFood && <Hero data={data} />}
          {tabClothes && <Hero data={data} />}
          {tabProfile && <Hero data={data} />} */}
          {tabProfile && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
