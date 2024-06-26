import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './SideNavbar.module.css';

function SideNavbar() {
  const [burger_class, setBurgerClass] = useState(
    `${styles.burgerMenu} + ' ' + ${styles.unclicked}`
  );
  const [menu_class, setMenuClass] = useState(
    `${styles.menu} + ' ' + ${styles.hidden}`
  );
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(`${styles.burgerMenu} + ' ' + ${styles.clicked}`);
      setMenuClass(`${styles.menu} + ' ' + ${styles.visible}`);
    } else {
      setBurgerClass(`${styles.burgerMenu} + ' ' + ${styles.unclicked}`);
      setMenuClass(`${styles.menu} + ' ' + ${styles.hidden}`);
    }
    setIsMenuClicked((isMenuClicked) => !isMenuClicked);
  };

  const resetMenu = () => {
    setBurgerClass(`${styles.burgerMenu} + ' ' + ${styles.unclicked}`);
    setMenuClass(`${styles.menu} + ' ' + ${styles.hidden}`);
    setIsMenuClicked(false);
  };

  return (
    <div className={styles.sideNavbarContainer}>
      <div className={styles.overlay}></div>
      <div className={burger_class} onClick={updateMenu}>
        <div className={styles.burgerBar}></div>
        <div className={styles.burgerBar}></div>
        <div className={styles.burgerBar}></div>
      </div>

      <div className={menu_class}>
        <div className={styles.closeButton} onClick={resetMenu}>
          <div className={styles.closeButtonBar}></div>
          <div className={styles.closeButtonBar}></div>
          <div className={styles.closeButtonBar}></div>
        </div>
        <ul className={styles.linksList}>
          <li className={styles.linksItem} onClick={resetMenu}>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className={styles.linksItem} onClick={resetMenu}>
            <NavLink to="/finance">FINANCE</NavLink>
          </li>
          <li className={styles.linksItem} onClick={resetMenu}>
            <NavLink to="/properties">PROPERTIES</NavLink>
          </li>
          <li className={styles.linksItem} onClick={resetMenu}>
            <NavLink to="/entertainment">ENTERTAINMENT</NavLink>
          </li>
          <li className={styles.linksItem} onClick={resetMenu}>
            <NavLink to="/terms-and-conditions">TERMS & CONDITIONS</NavLink>
          </li>
          <li className={styles.linksItem} onClick={resetMenu}>
            <NavLink to="/privacy-policy">PRIVACY POLICY</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavbar;
