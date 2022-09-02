import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './Header.css';

const Header = () => (
  <div>
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand className="brand" href="#home">
          <img src="/assets/rocket-placeholder.png" width="30" height="30" alt="logo" />
          <h2> Space Travelers&rsquo;Hub</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end NavLinkS">
          <Nav>
            <NavLink to="/rockets">Rockets</NavLink>
            <NavLink to="/missions">Missions</NavLink>
            <div className="line">|</div>
            <NavLink to="/profile">My Profile</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr className="hr" />
  </div>
);

export default Header;
