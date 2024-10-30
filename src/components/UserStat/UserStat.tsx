import { observer } from 'mobx-react-lite';
import UserStore from '../../store/RepositoryStore';
import classes from './UserStat.module.scss';

const UserStat = observer(() => {
  const { user } = UserStore;

  if (!user) {
    return null;
  }

  return (
    <div className={classes.userStat}>
      <div className={classes.info}>
        <div className={classes.infoTitle}>Repos</div>
        <div className={classes.infoNumber}>{user.repos}</div>
      </div>
      <div className={classes.info}>
        <div className={classes.infoTitle}>Following</div>
        <div className={classes.infoNumber}>{user.following}</div>
      </div>
      <div className={classes.info}>
        <div className={classes.infoTitle}>Followers</div>
        <div className={classes.infoNumber}>{user.followers}</div>
      </div>
    </div>
  );
});

export default UserStat;
