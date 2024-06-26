import { NavLink } from 'react-router-dom';

import styles from './SolutionsHeaderSection.module.css';

function SolutionsHeaderSection() {
  return (
    <section className={styles.headerSectionContainer}>
      <div className={styles.headerSectionInnerContainer}>
        <div className={styles.headerSectionContentContainer}>
          <span>We are committed to your results.</span>
          <span>We deliver. It&apos;s simply what we do.</span>
          <div className={styles.headerSectionButtonContainer}>
            <NavLink to="/about">Contact Us</NavLink>
          </div>
        </div>
        <div className={styles.headerSectionImgContainer}>
          <img src="../../../src/assets/images/solutions_header_section_img.png" />
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

export default SolutionsHeaderSection;
