import React from "react";
import Header from "../../component/header";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultForm = {
  name: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ ...defaultForm });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!form.name || !form.password || !form.confirmPassword) {
        return;
      }

      if (form.password !== form.confirmPassword) {
        return;
      }

      const response = await api.post("/usuario", {
        nome: form.name,
        senha: form.password,
      });

      if (response.status > 204) {
        return;
      }

      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  }

  function handleChangeForm({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  return (
    <div className="containerRegister" onSubmit={handleSubmit}>
      <Header />
      <input
        name="Username"
        placeholder="Username"
        type="text"
        value={form.name}
        onChange={handleChangeForm}
        // required
      />
      <input
        name="Senha"
        placeholder="Senha"
        type="password"
        className="inputSenha"
        value={form.password}
        onChange={handleChangeForm}
        // required
      />
      <input
        name="Senha"
        placeholder="Confimar senha"
        type="password"
        value={form.password}
        onChange={handleChangeForm}
        // required
      />
      <button className="btn-register">Cadastrar</button>
    </div>
  );
}
