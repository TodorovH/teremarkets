import { NavLink } from 'react-router-dom';

import styles from './MediaMarketingSection.module.css';

function MediaMarketingSection() {
  return (
    <section className={styles.mediaMarketingSectionContainer}>
      <div className={styles.mediaMarketingSectionInnerContainer}>
        <div className={styles.mediaMarketingSectionContentContainer}>
          <p>Media Marketing!</p>
          <p>
            Our new digital media and streaming advertising outperforms
            Connecting advertisers with hard-to-reach target audiences and
            platforms with brands and businesses all over the world
            &#40;literally!&#41;.
          </p>
          <div className={styles.mediaMarketingSectionButtonContainer}>
            <NavLink to="/about">View now</NavLink>
          </div>
        </div>
        <div className={styles.mediaMarketingSectionImgContainer}>
          <img src="../../../src/assets/images/media_marketing_section_img.png" />
        </div>
      </div>
    </section>
  );
}

export default MediaMarketingSection;
