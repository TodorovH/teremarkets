import { NavLink } from 'react-router-dom';

import styles from './AffiliateSection.module.css';

function AffiliateSection() {
  return (
    <section className={styles.affiliateSectionContainer}>
      <div className={styles.affiliateSectionInnerContainer}>
        <div className={styles.affiliateSectionImgContainer}>
          <img src="../../../src/assets/images/affiliate_section_img.png" />
        </div>
        <div className={styles.affiliateSectionContentContainer}>
          <p>
            When you&apos;re with Teremarkets Advertising, you have Affiliate
            Intelligence.
          </p>
          <p>
            Want to get the most out of affiliate? Say hello to{' '}
            <span>Affiliate Intelligence</span>. Through groundbreaking
            technology and deep human expertise, you can tap into the full power
            of affiliate and never miss an opportunity.
          </p>
          <div className={styles.affiliateSectionButtonContainer}>
            <NavLink to="/about">Join the fun!</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AffiliateSection;
