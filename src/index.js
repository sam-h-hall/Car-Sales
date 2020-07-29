import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { featureReducer } from "./reducers/featureReducer"

const store = createStore(featureReducer);

console.log(store)

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement);
