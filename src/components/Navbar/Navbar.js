import React from 'react';
import { NavLink } from 'react-router-dom';
import app from '../../base';
import { Nav } from './styled';
import { ReactComponent as LogoSVG } from 'assets/rick.svg';

const Navbar = () => {
  const onClickHandler = () => app.auth().signOut();

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
          <li onClick={onClickHandler}>Logout</li>
        </ul>
      </section>
    </Nav>
  );
};

export default Navbar;
