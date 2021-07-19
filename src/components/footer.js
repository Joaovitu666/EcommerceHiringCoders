import "../CSS/texts.css";
import "../CSS/footer.css";
import logo from "../assets/images/Logo_Casd_Fundo_Escuro.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="titulo">
        <h1>Loja do Centro Acadêmico do ITA </h1>
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
