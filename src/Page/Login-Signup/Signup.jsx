import React from "react";
import "./login.css";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="Login-Page">
      <div className="contain">
        <div className="headerr">
          <div className="textt">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputss">
          <div className="input">
            <FaRegUser className="img" />
            <input type="text" placeholder="name" name="" id="" />
          </div>
          <div className="input">
            <MdAlternateEmail className="img" />
            <input type="email" placeholder="E-mail" name="" id="" />
          </div>
          <div className="input">
            <RiLockPasswordFill className="img" />
            <input type="password" placeholder="password" name="" id="" />
          </div>
        </div>
        <div className="submit-container">
          <div className="submit ">SignUp</div>
          <div onClick={() => navigate("/Login")} className="submit Greybut">
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
