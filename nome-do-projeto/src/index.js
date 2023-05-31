import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Cabecalho } from './pagina-principal/cabecalho';
import { PaginaHome } from './pagina-principal/paginaHome';

ReactDOM.render(
  <>
    <Cabecalho/>
    <PaginaHome/>
  </>,
  document.getElementById('root')
);

reportWebVitals();
