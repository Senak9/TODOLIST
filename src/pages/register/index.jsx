import React from "react";
import Header from "../../component/header";
import "./style.css";

export default function Register() {
  return (
    <div className="containerRegister">
      <Header />
      <input
        name="Username"
        placeholder="Username"
        type="text"
        // value={}
        // onChange={(e) => setUsername(e.target.value)}
        // required
      />
      <input
        name="Senha"
        placeholder="Senha"
        type="password"
        className="inputSenha"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        // required
      />
      <input
        name="Senha"
        placeholder="Confimar senha"
        type="password"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        // required
      />
      <button className="btn-register">Cadastrar</button>
    </div>
  );
}
