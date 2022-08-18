import React from "react";
import Header from "../../component/header";
import "./style.css";
import { useEffect, useState } from "react";
import ListBasic from "../../component/listBasic";
import ListAdvanced from "../../component/listAdvanced";

export default function Home() {
  const [list, setList] = useState("");

  return (
    <div>
      <div className="containerHome">
        <Header />
        {list === "advanced" ? (
          <ListAdvanced />
        ) : list === "basic" ? (
          <ListBasic />
        ) : (
          <div className="containerBtn">
            <button className="btn-basic" onClick={() => setList("basic")}>
              Básico
            </button>
            <button
              className="btn-advanced "
              onClick={() => setList("advanced")}
            >
              Avançado
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
