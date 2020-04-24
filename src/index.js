import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import reducers from './redux/reducers'

const EstiloGlobal = createGlobalStyle`
body{
    margin:0;
  }
`

const store = createStore(reducers, {}, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
    <EstiloGlobal />
  </Provider>
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
