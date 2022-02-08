import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Chatlist from "./components/chatlist/Chatlist";
import Chatscreen from "./components/chatscreen/Chatscreen";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chatlist" element={<Chatlist />} />
        <Route path="/chatscreen" element={<Chatscreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
