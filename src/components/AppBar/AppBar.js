import React from 'react';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import s from './Navigation.module.css';

const AppBar = ({isAuth}) => {
    return (
        <header className={s.header}>
            <Navigation />
            {isAuth ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

export default AppBar;