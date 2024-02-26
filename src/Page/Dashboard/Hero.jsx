import React from "react";
import "./Dashboard.css";
const Hero = ({ data }) => {
  const content = Object.entries(data).map(([key, value]) => (
    <p key={key}>
      {key}: {value}
    </p>
  ));
  return (
    <div className="Hero">
      <div className="card-dashboard">
        {/* Render dynamic content from the map */}
        {content}
      </div>
    </div>
  );
};

export default Hero;
