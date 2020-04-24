import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import HomePage from '../paginas/HomePages'
import PeliculaDetalle from '../paginas/PeliculaDetalle'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header fecha={this.props.test.fecha} />
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/detalles/:peliculaid" component={PeliculaDetalle}></Route>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ test }) {
  return { test }
}

export default connect(mapStateToProps)(App);
