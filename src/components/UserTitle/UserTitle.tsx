import { observer } from 'mobx-react-lite';
import UserStore from '../../stores/UserStore';
import classes from './UserTitle.module.scss';

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const UserTitle = observer(() => {
  const { user } = UserStore;

  if (!user) {
    return null;
  }

  const joinedDate = localDate.format(new Date(user.created));

  return (
    <div className={classes.userTitle}>
      <h2>{user.name}</h2>
      <h3>{user.login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
});

export default UserTitle;
