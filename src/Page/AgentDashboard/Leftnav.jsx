import React from "react";
import "./dashboard.css";
const Leftnav = () => {
  return (
    <div className="leftnav">
      <div className="Dashboard-items">
        <h1>Dashboard</h1>
      </div>
      <div className="Dashboard-items">
        <h1>New Requests</h1>
      </div>
      <div className="Dashboard-items">
        <h1>Accepted</h1>
      </div>
      <div className="Dashboard-items">
        <h1>Rejected</h1>
      </div>
      <div className="Dashboard-items">
        <h1>Profile</h1>
      </div>
    </div>
  );
};

export default Leftnav;
