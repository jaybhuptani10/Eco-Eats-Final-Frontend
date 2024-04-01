import React from "react";
import "./dashboard.css";
import IMG from "./donation.png";

const Profile = () => {
  return (
    <div className="Profile-Page">
      <div className="espace">
        <h1>USER PROFILE</h1>
      </div>
      <div className="profile-info">
        <h1>
          First Name: <span>Jay</span>
        </h1>
        <h1>
          Last Name: <span>Bhuptani</span>
        </h1>
        <h1>
          Email: <span>abc@gmail.com </span>
        </h1>
        <h1>
          Phone Number: <span>1234567890</span>
        </h1>
        <h1>
          Address Line 1: <span>ummmm</span>
        </h1>
        <h1>
          Address Line 2: <span>Ok</span>
        </h1>
        <h1>
          City: <span>Ahmedanbad</span>
        </h1>
        <h1>
          Pincode : <span>380005</span>
        </h1>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default Profile;
