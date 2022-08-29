import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import appLogo from '../images/planet.png';

export default function Navbar() {
  return (
    <>
      <nav className="header">
        <div className="logo--header">
          <img src={appLogo} alt="app logo" />
          <h1>Space Travellers</h1>
        </div>
        <ul className="nav--all">
          <li><NavLink className="nav--item" exact to="/">Rockets </NavLink></li>
          <li><NavLink className="nav--item" to="/missions">Missions </NavLink></li>
          <li><NavLink className="nav--item" to="/profile">My Profile </NavLink></li>
        </ul>
        <Outlet />
      </nav>
      <hr />
    </>
  );
}
