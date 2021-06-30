import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, Redirect, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Login, setLogin] = useState(false);
  const TOKEN_KEY = 'jwt';

    const validateForm = () => {
  
      let errors = {};
  
      let formIsValid = true;
  
      if (!this.state.email) {
  
        formIsValid = false;
  
        errors["email"] = "*Please enter your email-ID.";
  
      }
  
      if (typeof this.state.email !== "undefined") {
  
  
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
        if (!pattern.test(this.state.email)) {
  
          formIsValid = false;
  
          errors["email"] = "Please enter valid email-ID";
  
        }
      }
  
      if (!this.state.password) {
  
        formIsValid = false;
  
        errors["password"] = "*Please enter your password.";
  
      }
      if (typeof this.state.password !== "undefined") {
  
        if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
  
          formIsValid = false;
  
          errors["password"] = "*Please enter secure and strong password.";
  
        }
      }
      this.setState({
  
        errors: errors
  
      });
  
      return formIsValid;
    }
    
  const submitForm = (e) => {
    // debugger
    e.preventDefault();
    if(validateForm()){
    axios
      .post("http://localhost:8080/api/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);

          localStorage.setItem('token', res.data.token);
          localStorage.setItem('email', res.data.email);
          localStorage.setItem(TOKEN_KEY, 'TestLogin');


          setLogin(true);
        } else console.log(res.data);
      })
      .catch((err) =>
        console.log('user not found'));
    }
  };
  return (
    <div
      style={{ fontSize: 16, backgroundColor: "gray", width: "75%" }}
      className="justify-content-md-center" >
      {Login && <Redirect to="/dashboard" />}
      <h1>WelCome to our LOGIN Page</h1>

      <Form action="" style={{ width: "70%" }} onSubmit={submitForm}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            required="required"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required="required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </Form.Group >
        <Button type="Submit">Login</Button>
        <br />
        <br />
Dont have an account ? <Link to="/">Create Account</Link>
      </Form >
    </div >
  );
}

export default withRouter(LoginPage);
