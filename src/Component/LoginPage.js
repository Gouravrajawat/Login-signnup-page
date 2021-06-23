import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Login, setLogin] = useState(false);
  const TOKEN_KEY = 'jwt';
  /*
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    email: " ",
    password: " ",
  });

  const validate = (target, value) => {
    var newErr = "";
    if (target === "email") {
      var mailformat =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (value && !value.match(mailformat))
        newErr = "Please enter valid email address!";
      else if (!value) newErr = "Email required!";
    }
    if (target === "password") {
      if (value && value.length < 6) newErr = "Password must be of length 6";
      else if (!value) newErr = "Password required!";
    }
    setErr({ ...err, [target]: newErr });
  };
  const handleChange = (target) => {
    const name = target.name;
    const value = target.value;
    setUser({ ...user, [name]: value });
    validate(name, value);
  };
  */
  const submitForm = (e) => {
    e.preventDefault();

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
        alert('user not found'));
  };
  return (
    <div
      style={{ backgroundColor: "darkgray", width: "75%" }}
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
        </Form.Group>
        <Button type="Submit">Login</Button>
        <br />
        <br />
        Dont have an account?<Link to="/">Create Account</Link>
      </Form>
    </div>
  );
};

export default LoginPage;
