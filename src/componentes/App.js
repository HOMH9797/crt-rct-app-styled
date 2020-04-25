import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateFecha } from '../redux/actions/testAction'
import HomePage from '../paginas/HomePages'
import PeliculaDetalle from '../paginas/PeliculaDetalle'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

class App extends Component {
  componentDidMount() {
    setInterval(this.props.updateFecha, 1000)
  }
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

export default connect(mapStateToProps, { updateFecha })(App);
