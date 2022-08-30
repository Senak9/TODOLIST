import React from "react";
import Header from "../../component/header";
import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = getItem("token");

    if (token) {
      navigate("/home");
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!nome || !password) {
        return;
      }

      const response = await api.post("/login", {
        nome,
        senha: password,
      });

      const { usuario, token } = response.data;

      setItem("token", token);
      setItem("userId", usuario.id);
      setItem("userName", usuario.nome);

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="containerLogin" onSubmit={handleSubmit}>
      <Header />
      <input
        name="Username"
        placeholder="Username"
        type="text"
        className="inputText"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        name="Senha"
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn-login">Enviar</button>
    </div>
  );
}
