import { FriendsList, Item, Status, Avatar, Name } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <Status type={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </FriendsList>
  );
};

FriendList.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
