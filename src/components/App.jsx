import { Profile } from './Profile/Profile';

import { Statistics } from './Statistics/Statistics';
import data from './data.json';

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="Upload stats" data={data} />
    </>
  );
};
