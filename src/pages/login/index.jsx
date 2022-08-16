import React from "react";
import Header from "../../component/header";
import "./style.css";

export default function Login() {
  return (
    <div className="containerLogin">
      <Header />
      <input
        name="Username"
        placeholder="Username"
        type="text"
        className="inputText"
        // value={}
        // onChange={(e) => setUsername(e.target.value)}
        // required
      />
      <input
        name="Senha"
        placeholder="Senha"
        type="password"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        // required
      />
      <button className="btn-login">Enviar</button>
    </div>
  );
}
