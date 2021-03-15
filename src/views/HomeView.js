import React from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './HomeView.module.css';
import '../styles/animations/ModalAppear.css';


const HomeView = () => {
    return (
        <h1 className={s.title}>Welcome to Phonebook!</h1>
    );
};

export default HomeView;