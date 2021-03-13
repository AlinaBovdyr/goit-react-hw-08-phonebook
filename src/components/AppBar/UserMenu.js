import React from 'react';
import Button from '../UI/Button';
import s from './Navigation.module.css';

const UserMenu = ({avatar, name, onLogout}) => {
    return (
        <div className={s.userMenu}>
            <img src={avatar} alt={name} width="32" />
            <span className={s.link}>Welcome, {name}</span>
            <Button className={s.headerBtn} onClick={onLogout} title="Logout"/>
        </div>
    );
};

export default UserMenu;