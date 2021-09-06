import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBack.module.css'

const NavBack = () => {
  return (
    <div className={styles.back}>
      <Link to="/login">
        <div className={styles.backButton}></div>
        </Link>
    </div>
  )
}

export default NavBack
