import { NavLink } from 'react-router-dom';

import styles from './InfluenceMarketingSection.module.css';

function InfluenceMarketingSection() {
  return (
    <section className={styles.influenceMarketingSectionContainer}>
      <div className={styles.influenceMarketingSectionInnerContainer}>
        <div className={styles.influenceMarketingSectionImgContainer}>
          <img src="../../../src/assets/images/influence_marketing_section_img.png" />
        </div>
        <div className={styles.influenceMarketingSectionContentContainer}>
          <p>Influence Marketing!</p>
          <p>
            Leverage creator powered marketing to drive your business
            strategies! Connecting with the right influencers is just the
            beginning. We are here to ensure your influencer strategy stays
            competitive and keeps delivering results.
          </p>
          <div className={styles.influenceMarketingSectionButtonContainer}>
            <NavLink to="/about">Show me</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfluenceMarketingSection;
