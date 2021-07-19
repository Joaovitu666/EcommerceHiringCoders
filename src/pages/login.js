import "../CSS/dailymenu.css";
import React, { useState } from "react";
import Casd from "../assets/images/Casd_Branco.png";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  function SaveData() {
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("senha", JSON.stringify(senha));
  }
  return (
    <div>
      <div className="welcome">
        <div className="Img">
          <h1 className="text1">Faça Login para receber descontos! </h1>
          <img src={Casd} className="Casd"></img>
        </div>
        <div className="cadastroContainer">
          <div className="cadastro">
            <div className="title">
              <label>Cadastro</label>
            </div>
            <label className="text2">Email</label>
            <input
              placeholder="nome@email.com"
              type="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label className="text2">Senha</label>
            <input
              placeholder="digite a senha"
              type="password"
              className="input"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
            />
            <label className="text2">Confirme a senha</label>
            <input
              placeholder="confirme a senha"
              type="password"
              className="input"
            />
            <button
              type="button"
              id="buttonCompanyStar"
              className="btn btn-danger"
              onClick={SaveData}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
