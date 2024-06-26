import { NavLink } from 'react-router-dom';

import styles from './NetworkSection.module.css';

function NetworkSection() {
  return (
    <section className={styles.networkSectionContainer}>
      <div className={styles.networkSectionInnerContainer}>
        <div className={styles.networkSectionImgContainer}>
          <img src="../../../src/assets/images/network_section_img.png" />
        </div>
        <div className={styles.networkSectionContentContainer}>
          <p>The network - iZipGlobal!</p>
          <p>
            The #1 global affiliate network & platform - We deliver the
            ecosystem and expertise that build better performance.
          </p>
          <div className={styles.networkSectionButtonContainer}>
            <NavLink to="/about">Learn more</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NetworkSection;
