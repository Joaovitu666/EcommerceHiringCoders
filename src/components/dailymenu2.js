import React from "react";
import "../CSS/texts.css";
import "../CSS/dailymenu.css";
import Moletom4 from "../assets/images/Produtos/Moletom4.png";
import Moletom5 from "../assets/images/Produtos/Moletom5.png";
import Moletom6 from "../assets/images/Produtos/Moletom6.jpg";

const DailyMenu2 = ({ diaDaSemana }) => {
  return (
    <div className="wholeblock">
      <h1>{diaDaSemana}</h1>
      <div className="meals">
        <div className="onemeal rotated-left">
          <img src={Moletom4} className="produto" alt=""></img>
          <h3>100 reais</h3>
        </div>
        <div className="onemeal center">
          <img src={Moletom5} className="produto" alt=""></img>
          <h3>120 reais</h3>
        </div>
        <div className="onemeal rotated-right">
          <img src={Moletom6} className="produto" alt=""></img>
          <h3>130 reais</h3>
        </div>
      </div>
    </div>
  );
};
export default DailyMenu2;
