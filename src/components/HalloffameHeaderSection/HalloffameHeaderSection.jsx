import styles from './HalloffameHeaderSection.module.css';

function HalloffameHeaderSection() {
  return (
    <section className={styles.halloffameHeaderSectionContainer}>
      <div className={styles.halloffameHeaderSectionInnerContainer}>
        <div className={styles.halloffameHeaderSectionContentContainer}>
          <span>THE HALL OF FAME</span>
          <span>Where the Magic Really Happens!</span>
        </div>
        <div className={styles.halloffameHeaderSectionImgContainer}>
          <img src="../../../src/assets/images/halloffame_header_section_img.png" />
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

export default HalloffameHeaderSection;
