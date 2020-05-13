import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';

import reducers from './redux/reducers'
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
body{
    margin:0;
  }
`


const store = createStore(reducers,{}, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <EstiloGlobal />
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
