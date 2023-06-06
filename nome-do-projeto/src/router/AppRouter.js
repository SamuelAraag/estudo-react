import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PaginaHome } from "../pagina-principal/paginaHome";
import { Sobre } from "../sobre/sobre";

const Principal = () => <PaginaHome />;
const PaginaSobre = () => <Sobre />;

const AppRouter = () => (
  <Router>
    <div>
        <Route exact path="/" component={Principal} />
        <Route path="/sobre" component={PaginaSobre} />
    </div>
  </Router>
);

export default AppRouter;
