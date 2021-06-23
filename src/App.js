import './App.module.css'
import './index.css'
import './App.css'
import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import LoginPage from "./Component/LoginPage"
import SignUp from "./Component/SignUp"
import DashBoard from "./Component/DashBoard.js"
import { Container } from 'react-bootstrap';
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./routes/PrivateRoute"
import PublicRoute from "./routes/PublicRoute"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container className="App">
          <Route>
            <Switch>
              <PublicRoute exact path="/" component={SignUp} />
              <PublicRoute exact path="/loginpage" component={LoginPage} />
              <PrivateRoute path="/dashboard" component={DashBoard} />
            </Switch>
          </Route>
        </Container>
      </Provider>
    );
  }
}

export default App


