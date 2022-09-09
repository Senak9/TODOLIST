import React from "react";
import Header from "../../component/header";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

const defaultForm = {
  username: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ ...defaultForm });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("dddd");
    try {
      if (!form.username || !form.password || !form.confirmPassword) {
        console.log("ddadasda");
        console.log(form);
        return;
      }

      if (form.password !== form.confirmPassword) {
        console.log("213222123");
        return;
      }

      console.log(form);

      const response = await api.post("/usuario", {
        nome: form.username,
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
    <div className="containerRegister">
      <Header />
      <form className="containerRegister" onSubmit={handleSubmit}>
        {" "}
        <input
          name="username"
          placeholder="Username"
          type="text"
          onChange={handleChangeForm}
          // required
        />
        <input
          name="password"
          placeholder="Senha"
          type="password"
          className="inputSenha"
          onChange={handleChangeForm}
          // required
        />
        <input
          name="confirmPassword"
          placeholder="Confimar senha"
          type="password"
          onChange={handleChangeForm}
          // required
        />
        <button className="btn-register" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
