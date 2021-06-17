import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Redirect, withRouter } from "react-router-dom";
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
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onsubmitForm = this.onsubmitForm.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  validate = () => {
    // let firstNameError = "";
    //  let lastNameError = "";
    let emailError = "";
    // let passwordError = "";
    if (this.state.email.includes('@')) {
      emailError = "Invalid email";
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    return true;
  }
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
        .catch((err) => console.log(err));
    }
  };
  render() {
    return (
      <div
        style={{ fontSize: 14, backgroundColor: "	dimgrey", width: "75%" }}
        className="justify-content-md-center">

        { this.state.signup && <Redirect to="/loginpage" />}
        <>
          <h1>WelCome to our SignUp Page</h1>
        </>

        <Form onSubmit={this.onsubmitForm} style={{ width: "75%" }}>

          <Form.Group controlId="formBasicFirstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              type="text"
              placeholder="FirstName"
              name="firstName"
              required="required"
              value={this.state.firstName}
              onChange={this.onChange}
            />
            <div style={{ fontSize: 14, color: "red" }}>
              {this.state.firstNameError}
            </div>

          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              placeholder="lastName"
              name="lastName"
              required="required"
              value={this.state.lastName}
              onChange={this.onChange}
            />
            <div style={{ fontSize: 14, color: "red" }}>
              {this.state.lastNameError}
            </div>
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
            <div style={{ fontSize: 14, color: "red" }}>
              {this.state.emailError}
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required="required"
              value={this.state.password}
              onChange={this.onChange}
            />
            <div style={{ fontSize: 14, color: "red" }}>
              {this.state.passwordError}
            </div>
          </Form.Group>
          <Button type="submit" class="btn btn-success">SignUp</Button>
          <br />
          <br />
          <br />
          <h6>
            <Button type="primary" onClick={() => this.props.history.push('/loginpage')}>Already have an account </Button>
          </h6>
        </Form>
      </div >
    );
  }
}

export default withRouter(SignUp);
