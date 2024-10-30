import { observer } from 'mobx-react-lite';
import UserStore from '../../stores/UserStore';
import UserInfo from '../UserInfo/UserInfo';
import UserStat from '../UserStat/UserStat';
import UserTitle from '../UserTitle/UserTitle';
import classes from './UserCard.module.scss';

const UserCard = observer(() => {
  const { user } = UserStore;

  if (!user) {
    return null;
  }

  return (
    <div className={classes.userCard}>
      <img className={classes.avatar} src={user.avatar} alt="Avatar iamge" />
      <UserTitle />
      <p className={`${classes.bio}${user.bio ? '' : ` ${classes.empty}`}`}>{user.bio || 'This profile has no bio'}</p>
      <UserStat />
      <UserInfo />
    </div>
  );
});

export default UserCard;
