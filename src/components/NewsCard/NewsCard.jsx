import { useContext } from 'react';

import { ModalContext } from '../../App';

import styles from './NewsCard.module.css';

function NewsCard({ newsInfo }) {
  const { imgUrl, storyGroupTitleLink, newsHeadLine, newsContent } = newsInfo;
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
      <hr></hr>
      <div className={styles.newsContent}>{newsContent}</div>
      <div className={styles.newsLinkContainer}>
        <a className={styles.newsLink} onClick={handleClick}>
          Read More...
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
