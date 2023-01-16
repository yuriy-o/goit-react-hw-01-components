import { Profile } from './Profile/Profile';

import { Statistics } from './Statistics/Statistics';
import data from './data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './friends.json';

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />;
    </>
  );
};
