import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.linksListContainer}>
      <ul className={styles.linksList}>
        <li className={styles.linksItem}>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className={styles.linksItem}>
          <NavLink to="/d2csolutions">D2C SOLUTIONS</NavLink>
        </li>
        <li className={styles.linksItem}>
          <NavLink to="/halloffame">HALL OF FAME</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
