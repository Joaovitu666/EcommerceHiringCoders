import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/Logo_Casd_Fundo_Escuro.svg";
import BaseButton from "./button.js";

import "../CSS/texts.css";
import "../CSS/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["within"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  } else {
    navbarClasses.push("text-button");
  }

  return (
    <div className="navbar">
      <div className="within">
        <Link to="/" className="Nav__brand">
          <img src={logo} alt="" width="300px" height="60px" />
        </Link>
      </div>
      <div className="within">
        <Link to="/" className="nav-button">
          <BaseButton classname={navbarClasses.join(" ")} text="PRODUTOS" />
        </Link>
        <Link to="/about" className="nav-button">
          <BaseButton classname="text-button" text="SOBRE NÓS" />
        </Link>
        <Link to="/login" className="nav-button">
          <BaseButton classname="text-button" text="Login(desafio1)" />
        </Link>
        <Link to="/Cadastro" className="nav-button">
          <BaseButton classname="text-button" text="Cadastro(desafio2)" />
        </Link>
        <Link to="/client" className="nav-button">
          <BaseButton classname="text-button" text="CARRINHO" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
