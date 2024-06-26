import DOMPurify from 'dompurify';

import styles from './NewsModal.module.css';

function NewsModal({ newsInfo, closeModal }) {
  const { imgUrl, newsHeadLine, newsContent } = newsInfo;

  return (
    <div className={styles.newsModalOverlayContainer}>
      <div className={styles.newsModalContainer}>
        <div
          role="button"
          className={styles.closeModalBtn}
          onClick={() => closeModal(false)}
        >
          &times;
        </div>
        <div className={styles.newsModalInnerContainer}>
          <div className={styles.newsImgContainer}>
            <img src={imgUrl} className={styles.newsImg} />
          </div>
          <div className={styles.newsHeadLine}>{newsHeadLine}</div>
          <div
            className={styles.newsContent}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(newsContent),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default NewsModal;
