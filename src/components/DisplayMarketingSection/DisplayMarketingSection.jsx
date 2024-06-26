import { NavLink } from 'react-router-dom';

import styles from './DisplayMarketingSection.module.css';

function DisplayMarketingSection() {
  return (
    <section className={styles.displayMarketingSectionContainer}>
      <div className={styles.displayMarketingSectionInnerContainer}>
        <div className={styles.displayMarketingSectionContentContainer}>
          <p>Display Marketing!</p>
          <p>
            Display ads allow us to deliver campaigns and message to those who
            are interested in your products or services at a specific time to
            maximize ROI and performance.
          </p>
          <div className={styles.displayMarketingSectionButtonContainer}>
            <NavLink to="/about">Find out more</NavLink>
          </div>
        </div>
        <div className={styles.displayMarketingSectionImgContainer}>
          <img src="../../../src/assets/images/display_marketing_section_img.png" />
        </div>
      </div>
    </section>
  );
}

export default DisplayMarketingSection;
