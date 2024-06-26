import { useContext } from 'react';

import { ModalContext } from '../../App';

import styles from './MainNewsCard.module.css';

function MainNewsCard({ newsInfo }) {
  const { imgUrl, storyGroupTitleLink, newsHeadLine } = newsInfo;
  const { openModal, setModalData } = useContext(ModalContext);

  const handleClick = () => {
    setModalData(newsInfo);
    openModal(true);
  };

  return (
    <div className={styles.newsCardContainer}>
      <div className={styles.newsImgContainer}>
        <a className={styles.newsLink} onClick={handleClick}>
          <img src={imgUrl} className={styles.newsImg} />
        </a>
      </div>
      {storyGroupTitleLink && (
        <div className={styles.storyGroupTitleLink}>{storyGroupTitleLink}</div>
      )}
      <div className={styles.newsHeadLine}>
        <a className={styles.newsLink} onClick={handleClick}>
          {newsHeadLine}
        </a>
      </div>
      <div className={styles.newsLinkContainer}>
        <a className={styles.newsLink} onClick={handleClick}>
          Read More...
        </a>
      </div>
    </div>
  );
}

export default MainNewsCard;
