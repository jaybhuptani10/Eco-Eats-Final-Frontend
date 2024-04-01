import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist";

const PlotlyComponent = ({ plotDiv }) => {
  const plotRef = useRef(null);

  useEffect(() => {
    // Ensure that the plotRef has been assigned a current value
    if (plotRef.current && plotDiv) {
      // Clear any existing content
      plotRef.current.innerHTML = "";

      // Append the plotDiv content to the ref's current element
      const div = document.createElement("div");
      div.innerHTML = plotDiv;
      plotRef.current.appendChild(div);

      // Render the Plotly graph
      Plotly.newPlot(div, [], {}, { displayModeBar: false });
    }
  }, [plotDiv]); // Run this effect whenever plotDiv changes

  return <div ref={plotRef}></div>;
};

export default PlotlyComponent;
