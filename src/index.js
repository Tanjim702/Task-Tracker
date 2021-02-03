import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store/store";
import jwtDecode from "jwt-decode";
import {toggleAuthHeader} from "./utils";


const token = localStorage.getItem('token')
if(token){
  toggleAuthHeader('set',token)
  const decode = jwtDecode(token)
  store.dispatch({
    type:"SET_USER",
    payload:decode.user
  })

}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
