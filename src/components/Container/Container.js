import React from 'react';
import s from './Container.module.css';

export default function Container({ children }) {
  return (
    <div className={s.mainContainer}>
      <section className={s.section}>
        {children}
      </section>
    </div>
  )
}