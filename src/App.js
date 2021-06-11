import './App.module.css'
import './index.css'
import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import LoginPage from "./Component/LoginPage.js"
import SignUp from "./Component/SignUp.js"
import DashBoard from "./Component/DashBoard.js"
import { Container } from 'react-bootstrap';


class App extends Component {
  render() {
  return (
    <Container className="App">
    <Switch>
     <Route exact path="/" render={()=> <SignUp className="SignUp" />} />
     <Route path="/loginpage" render={()=> <LoginPage className="LoginPage" />} />
     <Route path="/dashboard" render={()=> <DashBoard className="DashBoard" />} />
     </Switch>
     </Container>

  );
}
}

export default App

