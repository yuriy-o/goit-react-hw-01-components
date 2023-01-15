import styles from './Stats.module.css';

export const Stats = ({ children }) => {
  return <ul className={styles.stats}>{children}</ul>;
};
