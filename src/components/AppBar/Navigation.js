import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../Router/routes';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink to={routes.home} exact className={s.link} activeClassName={s.activeLink}>
                Homepage
            </NavLink>

            <NavLink
                to={routes.contacts}
                exact
                className={s.link}
                activeClassName={s.activeLink}
            >
                Contacts
            </NavLink>
        </nav>
    );
};

export default Navigation;