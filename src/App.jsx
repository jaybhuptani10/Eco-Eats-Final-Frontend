import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const onTabChange = (tab) => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login data={["User", "Agent"]} onTabChange={onTabChange} />}
        />
        <Route
          path="/Register"
          element={
            <Register data={["User", "Agent"]} onTabChange={onTabChange} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
