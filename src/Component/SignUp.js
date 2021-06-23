import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Redirect, withRouter, Link } from "react-router-dom";
import axios from 'axios'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      signup: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onsubmitForm = this.onsubmitForm.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /*
  validate = (target, value) => {
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
  };
  handleChange = (target) => {
    const name = target.name;
    const value = target.value;
    setUser({ ...user, [name]: value });
    validate(name, value);
  };
  */
  /*
   formValidation = () => {
     const { email, password } = this.state;
     let isValid = true;
     const errors = {};
     if (!email) {
       isValid = false;
       errors["email"] = "Email id is required.";
     }
     else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
 
       isValid = false;
       errors["email"] = "Invalid email id";
     }
     if (password.trim().length < 8) {
       errors.passwordLength = "password must be of length 8 or higher";
       isValid = false;
     }
     this.setState({ errors });
     return isValid;
   }
   */

  onsubmitForm = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      var newUser =
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:8080/api/user/signup", newUser)
        .then((res) => {
          if (res.status === 201) {
            console.log(res.data);
            this.setState({
              signup: true,
            });

          } else console.log(res.data);
        })
        .catch((err) =>
          alert(err));
    }
  };
  render() {
    return (
      <div
        style={{ fontSize: 16, backgroundColor: "	lightslategrey", width: "75%" }}
        className="justify-content-md-center">
        { this.state.signup && <Redirect to="/loginpage" />}
        <h1>WelCome to our SignUp Page</h1>

        <Form onSubmit={this.onsubmitForm} style={{ backgroundColor: "gainsboro", width: "75%" }}>

          <Form.Group controlId="formBasicFirstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              type="text"
              placeholder="FirstName"
              name="firstName"
              required="required"
              minlength="3"
              maxlength="15"
              value={this.state.firstName}
              onChange={this.onChange}
            />

          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              placeholder="lastName"
              name="lastName"
              required="required"
              minlength="3"
              maxlength="15"
              value={this.state.lastName}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              required="required"
              value={this.state.email}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required="required"
              minlength="4"
              maxlength="15"
              value={this.state.password}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button type="submit" class="btn btn-success">SignUp</Button>
          <br />
          <br />
          <br />
          <h5>
            Already have an account?<Link to="/loginpage">Login Here</Link>
          </h5>
        </Form>
      </div >
    );
  }
}

export default withRouter(SignUp)
