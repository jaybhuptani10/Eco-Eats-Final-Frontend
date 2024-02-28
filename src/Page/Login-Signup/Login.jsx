import React, { useEffect, useState } from "react";
import "./login.css";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const Login = () => {
  const [token, setToken] = useState(localStorage.getItem("auth")|| null);
  const navigate = useNavigate();
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  const handleLoginSubmit = async(e)=>{
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    if(email.length>0 && password.length>0){
        const formData ={
            email,
            password,
        };

        try{
            const response = await axios.post(
                "http://localhost:3000/api/login",formData
            );
            localStorage.setItem('auth',JSON.stringify(response.data.token));
            console.log("Login Successful");
            const decodedToken = parseJwt(response.data.token);
            const role = decodedToken.role;

        // Redirect based on user's role
            if (role === 'Agent') {
              navigate('/Dashboard');
              console.log('Agent')
              console.log('clicked')
            } else if (role === 'Donor') {
              navigate('/Dashboard');
              console.log('Donor')
            }
            else{
              navigate('/Login');
            }

      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    } else {
      toast.error("Please fill all inputs");
    }

    }
        useEffect(()=>{
            if(token ==null){
               
               
                console.log(token)
            }
            else{
                console.log("You are not logged in");
                console.log("You are already logged in");
                navigate("/Dashboard");
            }
        },[token]);
    

  return (
    <form onSubmit={handleLoginSubmit}>
    <div className="Login-Page">
      <div className="contain">
        <div className="headerr">
          <div className="textt">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputss">
          <div className="input">
            <MdAlternateEmail className="img" />
            <input type="email" placeholder="E-mail" name="email" id="" />
          </div>
          <div className="input">
            <RiLockPasswordFill className="img" />
            <input type="password" placeholder="password" name="password" id="" />
          </div>
        </div>
        <div className="submit-container">
          <div onClick={() => navigate("/Signup")} className="submit  Greybut">
            SignUp
          </div>
          <button type='submit' className="submit ">Login</button>
        </div>
      </div>
    </div>
    </form>
  );
};

export default Login;
