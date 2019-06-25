import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentContainer}>
        <div className={styles.header__content}>
          <h1>Clutch City Stats</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
