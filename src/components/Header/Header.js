import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import s from '../Header/Header.module.css';
import userSelectors from '../../redux/user/userSelectors';

const Header = () => {
  const isLoggedIn = useSelector(state => userSelectors.getIsLoggedIn(state));

  return (
    <header className={s.header}>
      <h2>Phonebook</h2>
      <nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <NavLink
              to="/register"
              className={s.link}
              activeClassName={s.activeLink}
              exact
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className={s.link}
              activeClassName={s.activeLink}
            >
              Login
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
