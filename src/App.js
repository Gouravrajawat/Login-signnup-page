import './App.module.css'
import './index.css'
import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import LoginPage from "./Component/LoginPage.js"
import SignUp from "./Component/SignUp.js"
import DashBoard from "./Component/DashBoard.js"
import { Container } from 'react-bootstrap';
import { Provider } from "react-redux";
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container className="App">
          <Switch>
            <Route exact path="/" render={() => <SignUp className="SignUp" />} />
            <Route path="/loginpage" render={() => <LoginPage className="LoginPage" />} />
            <Route path="/dashboard" render={() => <DashBoard className="DashBoard" />} />
          </Switch>
        </Container>
      </Provider>
    );
  }
}

export default App

