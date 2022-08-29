import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './Header.css';

const Header = () => (
  <Navbar bg="white" expand="lg">
    <Container>
      <Navbar.Brand className="brand" href="#home">
        <img src="/assets/rocket-placeholder.png" width="30" height="30" alt="logo" />
        <h2> Space Travelers&rsquo;Hub</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/rockets">Rockets</Nav.Link>
          <Nav.Link href="/missions">Missions</Nav.Link>
          <div className="line" />
          <Nav.Link href="/profile">My Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
