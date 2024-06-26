import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerMenusListContainer}>
        <ul className={styles.menusList}>
          <li className={styles.menuItem}>
            <span>Legal & Privacy</span>
            <ul className={styles.linksList}>
              <li className={styles.linksItem}>
                <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
              </li>
              <li className={styles.linksItem}>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              </li>
            </ul>
          </li>
          <li className={styles.menuItem}>
            <span>Contact Us</span>
            <ul className={styles.linksList}>
              <li className={styles.linksItem}>
                <span>xxx@xxxxx.xx</span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <p>Teremarkets &copy;{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
