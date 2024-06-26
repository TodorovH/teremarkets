import EditorNewsCard from '..//EditorNewsCard/EditorNewsCard';

import styles from './EditorPicksNews.module.css';

function EditorPicksNews({ newsInfo }) {
  return (
    <>
      <h3>Editor&apos;s picks</h3>
      <ul className={styles.newsItemsList}>
        {newsInfo.map((newsItem) => (
          <li className={styles.newsItem} key={newsItem.id}>
            <EditorNewsCard newsInfo={newsItem} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default EditorPicksNews;
