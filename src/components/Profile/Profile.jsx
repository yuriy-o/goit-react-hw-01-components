import { Location } from './Location/Location';
import { Tag } from './Tag/Tag';
import { Avatar } from './Avatar/Avatar';
import { Name } from './Name/Name';
import { StatsList } from './StatsList/StatsList';
import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';
import { Method } from './Method/Method';

import styles from './Profile.module.css';

export const Profile = () => {
  return (
    <Method>
      <div className={styles.profile}>
        <Description>
          <Avatar />
          <Name />
          <Tag />
          <Location />
        </Description>

        <Stats>
          <StatsList />
        </Stats>
      </div>
    </Method>
  );
};
