import PropTypes from 'prop-types';
import {
  Description,
  Profile,
  Tag,
  UserName,
  UserAvatar,
  Location,
  Stats,
  StatsList,
  Label,
  Quantity,
  Method,
} from './Profile2.styled';

export const Profile2 = ({ avatar, username, tag, location, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <Method>
      Used styled-components
      <Profile>
        <Description>
          <UserAvatar src={avatar} alt={username} />
          <UserName>{username}</UserName>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <Stats>
          <StatsList>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </StatsList>
          <StatsList>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </StatsList>
          <StatsList>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </StatsList>
        </Stats>
      </Profile>
    </Method>
  );
};

Profile2.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};
