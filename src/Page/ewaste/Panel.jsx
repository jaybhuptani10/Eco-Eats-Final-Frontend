import "./style.css";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import Navbar from "../../components/navbar/Navbar";

const Panel = () => {
  return (
    <div className="panel-screen">
      <div className="panel-left">
        <h1>Environmental Pollution:</h1>
      </div>
      <div className="panel-right"></div>
    </div>
  );
};

export default Panel;
