import PropTypes from 'prop-types';
import User from '../../user.json';

import styles from './Avatar.module.css';

export const Avatar = () => {
  return (
    <img src={User.avatar} alt={User.username} className={styles.avatar} />
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
