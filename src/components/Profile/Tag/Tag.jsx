import PropTypes from 'prop-types';

import User from '../../user.json';

export const Tag = () => {
  return <p className="tag">@{User.tag}</p>;
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};
