import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";

import Ewaste from "./Page/ewaste/Ewaste";
import Food from "./Page/Food/Food";
import About from "./Page/About/About";
import User from "./Page/Forms/User";
import Submit from "./Page/Forms/Submit";
import Formselect from "./Page/Forms/Formselect";
import Dashboard from "./Page/Dashboard/Dashboard";
import Clothes from "./Page/clothes/Clothes";
import Signup from "./Page/Login-Signup/Signup";
import Login from "./Page/Login-Signup/Login";

import Logout from "./Page/Login-Signup/Logout";

import Donate from "./Page/Forms/Donate";
import ADashboard from "./Page/AgentDashboard/Dashboard";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const onTabChange = (tab) => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Donate" element={<Donate />} />

        <Route path="/E-waste" element={<Ewaste />} />
        <Route path="/Food-Waste" element={<Food />} />
        <Route path="/About" element={<About />} />
        <Route path="/Form" element={<User />} />
        <Route path="/Submit" element={<Submit />} />
        <Route path="/Clothes" element={<Clothes />} />
        <Route path="/Select" element={<Formselect />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/AgentDashboard" element={<ADashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
