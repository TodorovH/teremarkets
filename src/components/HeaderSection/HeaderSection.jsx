import { NavLink } from 'react-router-dom';

import styles from './HeaderSection.module.css';

function HeaderSection() {
  return (
    <section className={styles.headerSectionContainer}>
      <div className={styles.headerSectionInnerContainer}>
        <div className={styles.headerSectionContentContainer}>
          <span>What We Do Online...</span>
          <span>Echoes in Eternity!</span>
          <div className={styles.headerSectionButtonContainer}>
            <NavLink to="/about">Contact Us</NavLink>
          </div>
        </div>
        <div className={styles.headerSectionImgContainer}>
          <img src="../../../src/assets/images/header_section_img.png" />
        </div>
      </div>
      <svg viewBox="0 0 1440 117">
        <path
          d="M1440 117V1.12354L135.866 113.837C123.121 114.932 110.527 110.357 101.473 101.315L0 0V117H1440Z"
          fill="white"
        ></path>
      </svg>
    </section>
  );
}

export default HeaderSection;
