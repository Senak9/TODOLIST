import React from "react";
import Header from "../../component/header";
import "./style.css";

export default function Home() {
  return (
    <div>
      <div className="containerHome">
        <Header />
        <div className="containerBtn">
          <button className="btn-basic">Básico</button>
          <button className="btn-advanced">Avançado</button>
        </div>
      </div>
    </div>
  );
}
