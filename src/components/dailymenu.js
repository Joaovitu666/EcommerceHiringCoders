import React from "react";
import "../CSS/texts.css";
import "../CSS/dailymenu.css";
import Moletom1 from "../assets/images/Produtos/Moletom1.jpg";
import Moletom2 from "../assets/images/Produtos/Moletom2.png";
import Moletom3 from "../assets/images/Produtos/Moletom3.jpg";

const DailyMenu1 = ({ diaDaSemana }) => {
  return (
    <div className="wholeblock">
      <h1>{diaDaSemana}</h1>
      <div className="meals">
        <div className="onemeal rotated-left">
          <img src={Moletom1} className="produto" alt=""></img>
          <h3>30 reais(10%OFF)</h3>
        </div>
        <div className="onemeal center">
          <img src={Moletom2} className="produto" alt=""></img>
          <h3>25 reais(10%OFF)</h3>
        </div>
        <div className="onemeal rotated-right">
          <img src={Moletom3} className="produto" alt=""></img>
          <h3>35 reais(10%OFF)</h3>
        </div>
      </div>
    </div>
  );
};

export default DailyMenu1;
