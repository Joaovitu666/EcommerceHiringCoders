import "../CSS/dailymenu.css";
import Casd from "../assets/images/Casd_Branco.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="welcome">
        <div className="Img">
          <h1 className="text1">Cadastre os produtos e os clientes aqui! </h1>
          <img src={Casd} className="Casd" alt=""></img>
        </div>
        <div className="cadastroContainer">
          <div className="cadastro">
            <div className="title">
              <label>Cadastro</label>
            </div>
            <Link to="/Client" className="btn">
              Cadastrar cliente
            </Link>
            <Link to="/Product" className="btn">
              Cadastrar Produto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
