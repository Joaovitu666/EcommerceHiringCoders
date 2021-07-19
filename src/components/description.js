import Casd from "../assets/images/Casd_Branco.png";
import "../CSS/description.css";
import "../CSS/texts.css";

const Description = () => {
  return (
    <div className="description">
      <h1 className="title">Sobre Nós</h1>
      <h2>Essa é a lojinha destinada aos alunos do ITA</h2>
      <h2 className="text">
        para dar à comunidade iteana o look certo para os futuro melas, eventos
        e passeios, divulgamos os produtos mais bonitos que o H8 já viu. temos
        diversos moletons cadernos e muito mais...
      </h2>
      <img className="kitchen" src={Casd} alt="Foto bonita" />
    </div>
  );
};

export default Description;
