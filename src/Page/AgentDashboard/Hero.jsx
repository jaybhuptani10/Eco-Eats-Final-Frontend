import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillSkin } from "react-icons/ai";
import "./dashboard.css";
import Modal from "./Modal";

const Hero = ({ data }) => {
  const [selectedId, setSelectedId] = useState(null); // Change to null to indicate no modal is open

  const handleOpenModal = (index) => {
    setSelectedId(index);
  };

  const handleCloseModal = () => {
    setSelectedId(null);
  };

  return (
    <motion.div className="cards">
      {data.map((item, index) => {
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            layoutId={index}
            onClick={() => handleOpenModal(index)} // Pass the index to identify which modal to open
            className="card-dashboard"
          >
            <motion.div className="content">
              <img src={item.img} alt="" />
              <p>{item.count}</p>
              <h1>{item.name}</h1>
            </motion.div>
          </motion.div>
        );
      })}
      <AnimatePresence>
        {selectedId !== null && <Modal onClose={handleCloseModal} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Hero;
