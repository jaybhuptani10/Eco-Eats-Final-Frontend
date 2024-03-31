import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillSkin } from "react-icons/ai";
import "./dashboard.css";
import Modal from "./Modal";
import Try from "./Try";
import PlotlyComponent from "./PlotlyComponent";

const Main = ({ data, setTouch }) => {
  const [selectedId, setSelectedId] = useState(null); // Change to null to indicate no modal is open

  const handleOpenModal = (index) => {
    // if (index == 1) {
    // }
    index != 0 && setTouch(index);
  };

  const handleCloseModal = () => {
    setSelectedId(null);
  };

  return (
    <motion.div className="carddss">
      {data.map((item, index) => {
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            // transition={{ duration: 0.5 }}
            layoutId={index}
            onClick={() => handleOpenModal(index)} // Pass the index to identify which modal to open
            className="card-dashboardd"
          >
            <img src={item.img} alt="" />
            <p>{item.count}</p>
            <h1>{item.name}</h1>
          </motion.div>
        );
      })}
      <AnimatePresence>
        {selectedId !== null && <Modal onClose={handleCloseModal} />}
      </AnimatePresence>
      {/* <Try /> */}
    </motion.div>
  );
};

export default Main;
