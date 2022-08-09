import { Routes, Outlet, Route, Navigate } from "react-router-dom";

import Pokedex from "../pages/pokedex";
import Home from "../pages/home";

import React from "react";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
