import React from 'react';
import { NavLink } from 'react-router-dom';
import app from '../../base';
import { Nav } from './styled';
import { ReactComponent as LogoSVG } from 'assets/rick.svg';

const Navbar = () => {
  return (
    <Nav>
      <section>
        <div>
          <LogoSVG />
        </div>
        <ul>
          <NavLink exact to="/">
            <li>Quests</li>
          </NavLink>
          <NavLink to="/persona">
            <li>Collection</li>
          </NavLink>
          <button onClick={() => app.auth().signOut()}>
            <li>Logout</li>
          </button>
        </ul>
      </section>
    </Nav>
  );
};

export default Navbar;
