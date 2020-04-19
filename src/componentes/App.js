import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from '../paginas/HomePages'
import PeliculaDetalle from '../paginas/PeliculaDetalle'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/detalles/:peliculaid" component={PeliculaDetalle}></Route>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
