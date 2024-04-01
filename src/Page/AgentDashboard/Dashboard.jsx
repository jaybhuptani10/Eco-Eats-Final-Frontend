import React, { useEffect } from "react";
import "./dashboard.css";
import Navbar from "../../components/navbar/Navbar";
import Leftnav from "./Leftnav";
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
import Main from "./Main";
const Dashboard = () => {
  const [touch, setTouch] = useState(0);
  const [data, setData] = useState(false);
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

  const Ewaste = [
    {
      Type: "E-waste",
      "Pickup Time": "27 January 2023",
      address: "Delhi",
      phone: "1234567890",
    },
  ];
  const Food = [
    {
      Type: "Food DOnation",
      "Pickup Time": "28 January 2023",
      address: "Delhi",
      phone: "1264567890",
    },
  ];
  const Clothes = [
    {
      Type: "Clothes Donation",
      "Pickup Time": "20 January 2023",
      address: "Ahmeabad",
      phone: "1264567890",
    },
  ];
  const [tabDashboard, setTabDashboard] = useState(true);
  const [tabNew, setTabENew] = useState(false);
  const [tabAccepted, setTabAccepted] = useState(false);
  const [tabRejected, setTabRejected] = useState(false);
  const [tabProfile, setTabProfile] = useState(false);
  // useEffect(() => {
  //   if (touch === true) {
  //     setTabDashboard(false);
  //     setTabEwaste(true);
  //     setTabFood(false);
  //     setTabClothes(false);
  //     setTabProfile(false);
  //   }
  // });
  const onTabSelected = (e) => {
    if (e.target.innerText === "Dashboard") {
      setTabDashboard(true);
      setTabENew(false);
      setTabAccepted(false);
      setTabRejected(false);
      setTabProfile(false);
      setTouch(0); // Reset touch to 0 when clicking on "Dashboard"
    } else if (e.target.innerText === "New Requests") {
      setTabDashboard(false);
      setTabENew(true);
      setTabAccepted(false);
      setTabRejected(false);
      setTabProfile(false);
      setTouch(1); // Set touch to 1 when clicking on "E-Waste"
    } else if (e.target.innerText === "Accepted") {
      setTabDashboard(false);
      setTabENew(false);
      setTabAccepted(true);
      setTabRejected(false);
      setTabProfile(false);
      setTouch(2); // Set touch to 2 when clicking on "Food Donation"
    } else if (e.target.innerText === "Rejected") {
      setTabDashboard(false);
      setTabENew(false);
      setTabAccepted(false);
      setTabRejected(true);
      setTabProfile(false);
      setTouch(3); // Set touch to 3 when clicking on "Clothes Donation"
    } else if (e.target.innerText === "Profile") {
      setTabDashboard(false);
      setTabENew(false);
      setTabAccepted(false);
      setTabRejected(false);
      setTabProfile(true);
      setTouch(0); // Reset touch to 0 when clicking on "Profile"
    }
  };

  return (
    <div className="profile">
      <Navbar />
      <div className="Dashboard">
        <div className="left-navi">
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboardd-item ${
              tabDashboard === true && "Dashboardd-item-selected"
            } `}
          >
            <h1>Dashboard</h1>
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboardd-item ${
              tabNew === true && "Dashboardd-item-selected"
            } `}
          >
            <h1>New Requests</h1>
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboardd-item ${
              tabAccepted === true && "Dashboardd-item-selected"
            } `}
          >
            <h1>Accepted</h1>
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboardd-item ${
              tabRejected === true && "Dashboardd-item-selected"
            } `}
          >
            <h1>Rejected</h1>
          </div>
          <div
            onClick={(e) => onTabSelected(e)}
            className={` Dashboardd-item ${
              tabProfile === true && "Dashboardd-item-selected"
            } `}
          >
            <h1>Profile</h1>
          </div>
        </div>
        <div className="right-dashboardd">
          {tabDashboard && <Main data={main} />}

          {tabNew && <Hero data={main} />}
          {tabAccepted && <Hero data={main} />}
          {tabRejected && <Hero data={main} />}

          {tabProfile && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
