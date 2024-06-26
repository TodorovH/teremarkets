import styles from './EcosystemSection.module.css';

function EcosystemSection() {
  return (
    <section className={styles.ecosystemSectionContainer}>
      <div className={styles.ecosystemSectionInnerContainer}>
        <div className={styles.ecosystemSectionUpperContainer}>
          <h3>The Teremarkets Ecosystem</h3>
          <ul>
            <li>
              <p className={styles.goalsTitle}>Teremarkets</p>
              <p>Powerhouse</p>
              <p>MARKETING SERVICES PROVIDER</p>
            </li>
            <li>
              <p className={styles.goalsTitle}>Global Company</p>
              <p>500+</p>
              <p>PRODUCTS & BRANDS</p>
            </li>
            <li>
              <p className={styles.goalsTitle}>Membership Worldwide</p>
              <p>50M+ members</p>
              <p>CONSUMERS</p>
            </li>
          </ul>
        </div>
        <div className={styles.ecosystemSectionBusinessLinesContainer}>
          <ul>
            <li>
              <img src="../../../src/assets/images/finance_icon.png" />
              <span className={styles.businessLineTitle}>Finance</span>
            </li>
            <li>
              <img src="../../../src/assets/images/travel_icon.png" />
              <span className={styles.businessLineTitle}>Travel</span>
            </li>
            <li>
              <img src="../../../src/assets/images/igaming_icon.png" />
              <span className={styles.businessLineTitle}>iGaming</span>
            </li>
            <li>
              <img src="../../../src/assets/images/ecommerce_icon.png" />
              <span className={styles.businessLineTitle}>E-commerce</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default EcosystemSection;
