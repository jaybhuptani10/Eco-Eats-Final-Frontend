import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
const Modal = ({ onClose }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        delay: 1.5,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  // Receive onClose function as props
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100vh" }}
      transition={{ duration: 0.5 }}
      className="Modal"
    >
      <div className="Modal-content">
        <FaWindowClose onClick={onClose} />{" "}
        {/* Call onClose function on click */}
        <h1>Modal</h1>
      </div>
    </motion.div>
  );
};

export default Modal;
