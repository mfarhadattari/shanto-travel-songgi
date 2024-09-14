import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderSmall}></div>
      <div className={styles.loaderLarge}></div>
    </div>
  );
};

export default Loading;
