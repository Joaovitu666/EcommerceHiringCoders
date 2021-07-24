import "../CSS/texts.css";
import "../CSS/footer.css";
import logo from "../assets/images/Logo_Casd_Fundo_Escuro.svg";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="titulo">
        <h1>Loja do Centro Acadêmico do ITA </h1>
      </div>
      <div>
        <a href="https://github.com/Joaovitu666">
          <img src={github} alt="" className="icon"></img>
        </a>
        <a href="https://www.linkedin.com/in/joao-guimaraes-031a00207/">
          <img src={linkedin} alt="" className="icon"></img>
        </a>
      </div>
      <div className="adress">
        <h6>Praça Marechal do Ar Eduardo Gomes nº 50 - Vila das Acácias</h6>
        <h6>São José dos Campos - São Paulo</h6>
        <h6>Autor:João Victor Borges Guimarães</h6>
      </div>
    </div>
  );
};

export default Footer;
