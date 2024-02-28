import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.removeItem("auth");
        console.log("You are logged out");
        setTimeout(()=>{
            navigate("/");
        });
        
    },[]);
  return (
    <div>
      <h1>Logout Successful</h1>
    </div>
  )
}

export default Logout
