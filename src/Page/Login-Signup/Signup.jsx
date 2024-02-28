import React, { useEffect, useState } from "react";
import "./login.css";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    // let lastname = e.target.lastname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    let role = e.target.role.value;

    if (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      role.length > 0
    ) {
      if (password > 0) {
        const formData = {
          username: name,
          email,
          password,
          role,
        };
        try {
          const response = await axios.post(
            "https://eco-eats-delta.vercel.app/api/register",
            formData
          );
          console.log("Registration successfull");
          navigate("/Login");
        } catch (err) {
          console.log(err.message);
        }
      } else {
        console.log("Passwords don't match");
      }
    } else {
      console.log("Please fill all inputs");
    }
  };

  return (
    <div className="Login-Page">
      <div className="contain containn">
        <div className="headerr">
          <div className="textt">Sign Up</div>
          <div className="underline"></div>
        </div>
        <form className="forms" onSubmit={handleRegisterSubmit}>
          <div className="inputss">
            <div className="input">
              <FaRegUser className="img" />
              <input type="text" placeholder="name" name="name" id="" />
            </div>
            <div className="input">
              <MdAlternateEmail className="img" />
              <input type="email" placeholder="E-mail" name="email" id="" />
            </div>
            <div className="input">
              <RiLockPasswordFill className="img" />
              <input
                type="password"
                placeholder="password"
                name="password"
                id=""
              />
            </div>

            <select
              style={{ padding: "20px" }}
              className="input"
              name="role"
              type="text"
              placeholder="Choose Your Role"
              required={true}
            >
              <option value="Agent">Agent</option>
              <option value="Donor">Donor</option>
            </select>
          </div>
          <div className="submit-container">
            <button
              style={{ backgroundColor: "#4C00B4" }}
              onSubmit={() => handleRegisterSubmit}
              className="submit"
              type="submit"
            >
              Sign Up
            </button>
            <div onClick={() => navigate("/Login")} className="submit Greybut">
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
