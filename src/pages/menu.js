import DailyMenu1 from "../components/dailymenu.js";
import DailyMenu2 from "../components/dailymenu2.js";
import "../CSS/dailymenu.css";
import React from "react";

function Menu() {
  return (
    <div>
      <div className="Retangulo">
        <h1> BEM VINDO À LOJINHA DO ITA </h1>
      </div>
      <div>
        <DailyMenu1 diaDaSemana="Promoção" />
        <DailyMenu2 diaDaSemana="Moletons" />
      </div>
    </div>
  );
}

export default Menu;
