import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Menu from "./pages/menu.js";
import About from "./pages/about.js";
import Login from "./pages/login.js";
import Login2 from "./pages/login2.js";
import ClientRegister from "./pages/CadastroCliente/index.js";
import ProductRegister from "./pages/CadastroProduto/index.js";
import ProductTable from "./pages/RepositorioProduto/index.js";
import ClientTable from "./pages/RepositorioCliente/index.js";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/Cadastro">
            <Login />
          </Route>
          <Route path="/Login">
            <Login2 />
          </Route>
          <Route path="/Client">
            <ClientRegister />
          </Route>
          <Route path="/Product">
            <ProductRegister />
          </Route>
          <Route path="/ProductRepository">
            <ProductTable />
          </Route>
          <Route path="/ClientRepository">
            <ClientTable />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
