import NewsCard from '..//NewsCard/NewsCard';

import styles from './TopStoriesSection.module.css';

function TopStoriesSection({ news }) {
  return (
    <section className={styles.topStoriesContainer}>
      <h3>Top Stories</h3>
      <hr></hr>
      <ul className={styles.newsItemsList}>
        {news.map((newsItem) => (
          <li className={styles.newsItem} key={newsItem.id}>
            <NewsCard newsInfo={newsItem} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TopStoriesSection;
