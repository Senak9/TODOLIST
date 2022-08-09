import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="containerHeader">
      <div className="titleHeader">
        <h1>Pokemon</h1>
      </div>

      <div className="boxHeader">
        <h2
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </h2>
        <h2
          onClick={() => {
            navigate("/pokedex");
          }}
        >
          Pokédex
        </h2>
        <h2>Moves</h2>
        <h2>Evolution</h2>
        <h2>Locations</h2>
        <h2>Outros</h2>

        {/* <img src={HeaderIcon} alt="HeaderIcon" className="SeaderIcon" /> */}
      </div>
    </div>
  );
}
