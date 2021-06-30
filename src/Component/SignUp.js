import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
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
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onsubmitForm = this.onsubmitForm.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validateForm() {

    let errors = {}
    let formIsValid = true;

    if (!this.state.firstName) {

      formIsValid = false;

      errors[""] = "Please enter your firstName.";

    }

    if (typeof this.state.firstName !== "undefined") {

      if (!this.state.firstName.match(/^[a-zA-Z ]*$/)) {

        formIsValid = true;

        errors["firstName"] = "Please enter alphabet characters only.";
      }
      else {
        this.setState({
          errors: "false"
        });
      }

      if (!this.state.lastName) {

        formIsValid = false;

        errors[""] = "Please enter your lastName";

      }

      if (typeof this.state.lastName !== "undefined") {

        if (!this.state.lastName.match(/^[a-zA-Z ]*$/)) {

          formIsValid = true;

          errors["lastName"] = "Please enter alphabet characters only";
        }
      }
      else {
        this.setState({
          errors: ""
        });
      }
      if (!this.state.email) {

        formIsValid = false;

        errors["email"] = "Please enter your email-ID";

      }

      if (typeof this.state.email !== "undefined") {

        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(this.state.email)) {

          formIsValid = true;

          errors["email"] = "Please enter valid email-ID";

        }

      }
      else {
        this.setState({
          errors: ""
        });
      }
      if (!this.state.password) {

        formIsValid = false;

        errors["password"] = "Please enter your password";

      }

      if (typeof this.state.password !== "undefined") {

        if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {

          formIsValid = false;

          errors["password"] = "Please enter secure and strong password";

        }

      }
      else {
        this.setState({
          errors: ""
        });
      }

      this.setState({
        ...this.state,
        errors: errors,
      });

      return formIsValid;

    }
  };

  onsubmitForm = (e) => {
    e.preventDefault();
    if(this.validateForm()){
    const { firstName, lastName, email, password } = this.state;

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
            this.props.history.push("/loginpage")
          } else console.log(res.data);
        })
        .catch((err) =>
          console.log(err));
      }
  };
  render() {
    return (
      <div
        style={{ fontSize: 16, backgroundColor: "	lightslategrey", width: "75%" }}
        className="justify-content-md-center">
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
            <div className="text-danger">{this.state.errors.firstName}</div>
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
            <div className="text-danger">{this.state.errors.lastName}</div>
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
            <div className="text-danger">{this.state.errors.email}</div>
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
            <div className="text-danger">{this.state.errors.password}</div>
          </Form.Group>
          <Button type="submit" class="btn btn-success"
            onClick={(e) => this.onsubmitForm(e)}
          >SignUp</Button>
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
