import { NavLink } from 'react-router-dom';

import styles from './FeaturesSection.module.css';

function FeaturesSection() {
  return (
    <section className={styles.featuresSectionContainer}>
      <div className={styles.featuresSectionInnerContainer}>
        <ul>
          <li>
            <img src="../../../src/assets/images/creators_icon.png" />
            <h2 className={styles.featureTitle}>
              Discover diverse & relevant creators
            </h2>
            <p className={styles.featureDescription}>
              Find and engage authentic creators that match your audience
              criteria.
            </p>
          </li>
          <li>
            <img src="../../../src/assets/images/ambassadors_icon.png" />
            <h2 className={styles.featureTitle}>Manage ambassador programs</h2>
            <p className={styles.featureDescription}>
              Run always-on programs covering brand ambassadors, existing
              customers, and influential employees.
            </p>
          </li>
          <li>
            <img src="../../../src/assets/images/campaigns_icon.png" />
            <h2 className={styles.featureTitle}>Activate campaigns quickly</h2>
            <p className={styles.featureDescription}>
              Easy-to-use, intuitive interface and tools launch campaigns
              quickly.
            </p>
          </li>
          <li>
            <img src="../../../src/assets/images/payments_icon.png" />
            <h2 className={styles.featureTitle}>
              Easily pay incentives & commissions
            </h2>
            <p className={styles.featureDescription}>
              Track and manage incentives, including cash, product, electronic
              gift cards, and promo codes.
            </p>
          </li>
        </ul>
        <div className={styles.featuresSectionButtonContainer}>
          <NavLink to="/about">Let&apos;s talk</NavLink>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
