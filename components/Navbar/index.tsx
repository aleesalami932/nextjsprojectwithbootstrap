import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top" className="py-3">
      <Container>
        <Navbar.Brand href="/">Frontend Bootcamp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-pills">
            <Nav.Link href="/#learning">Learning Material</Nav.Link>
            <Nav.Link href="/#questions">Questions</Nav.Link>
            <Nav.Link href="/#instructors">Instructors</Nav.Link>
            <Nav.Link href="/login">Login/Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
