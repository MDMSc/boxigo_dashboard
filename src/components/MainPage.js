import React from "react";
import "../css/mainpage.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyMoves from "./MyMoves";
import MyProfile from "./MyProfile";
import GetQuote from "./GetQuote";
import Logout from "./Logout";

export default function MainPage() {
  return (
    <div className="mainpage">
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/mymoves" element={<MyMoves />} exact />
            <Route path="/myprofile" element={<MyProfile />} exact />
            <Route path="/getquote" element={<GetQuote />} exact />
            <Route path="/logout" element={<Logout />} exact />
        </Routes>
    </div>
  )
}
