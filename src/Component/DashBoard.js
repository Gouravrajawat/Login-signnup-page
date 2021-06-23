import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <Container
      style={{ backgroundColor: "lightsteelblue" }}>
      <h1>You are SuccessFully Login</h1>
      <p>Congrualations you are Currently Logged in!!!</p>
      <Link to="/loginpage">Logout</Link>
    </Container >
  );
}

export default DashBoard;


