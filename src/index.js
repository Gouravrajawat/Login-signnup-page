import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import './App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
  document.getElementById("root")
);


















/*
function app([loaded]) {
  if (!loaded) {
    return null;
  }
  return <div>Hello</div>
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/


