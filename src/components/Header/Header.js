import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

import './Header.css';

function Header(props) {
  const { isLoggedIn } = props;

  return (
    <header className="header">
      <Link className="header__logo-link" to="/">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип Movies Explorer"
        />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
