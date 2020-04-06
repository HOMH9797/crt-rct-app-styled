import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomePage from '../paginas/HomePages'
import PeliculaDetalle from '../paginas/PeliculaDetalle'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/Detalle" component={PeliculaDetalle}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
