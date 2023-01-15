import User from '../../user.json';

import styles from './StatsList.module.css';

const USER_STATS = Object.entries(User.stats);

// console.log(USER_STATS);

export const StatsList = () => {
  return USER_STATS.map(data => {
    const stat = data[0];
    return (
      <li key={data[0]} className={styles['stats__list']}>
        <span className="label">{stat}</span>

        <span className={styles.quantity}>{data[1]}</span>
      </li>
    );
  });
};
