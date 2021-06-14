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

          setLogin(true);
        } else console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{ backgroundColor: "dimgrey", width: "100%" }}
      className="justify-content-md-center" >
      {Login && <Redirect to="/dashboard" />}

      <Form action="" style={{ width: "70%" }} onSubmit={submitForm}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="Submit">Login</Button>
        <Link to="/login"></Link>
      </Form>
    </div>
  );
};
export default LoginPage;
