import { Routes, Outlet, Route, Navigate } from "react-router-dom";

import Home from "../pages/home";

import React from "react";
import Login from "../pages/login";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
