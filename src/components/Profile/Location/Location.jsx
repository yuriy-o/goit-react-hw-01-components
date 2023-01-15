import PropTypes from 'prop-types';

import User from '../../user.json';

export const Location = () => {
  return <p className="location">{User.location}</p>;
};

Location.propTypes = {
  location: PropTypes.string.isRequired,
};
