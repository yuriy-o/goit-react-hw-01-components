import PropTypes from 'prop-types';
import User from '../../user.json';

import styles from './Name.module.css';

export const Name = () => {
  return <p className={styles.name}>{User.username}</p>;
};

Name.propTypes = {
  username: PropTypes.string.isRequired,
};
