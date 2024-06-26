import styles from './Header.module.css';

function Header({ children }) {
  return (
    <header className={styles.mainContainer}>
      <img src="../../../src/assets/images/black_logo.png" />
      {children}
    </header>
  );
}

export default Header;
