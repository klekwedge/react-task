import { observer } from 'mobx-react-lite';
import classes from './UserTitle.module.scss';
import { Owner } from '../../types';

const UserTitle = observer(({ user }: { user: Owner }) => (
    <div className={classes.userTitle}>
      <h2>{user.html_url}</h2>
      <h3>{user.login}</h3>
      {/* <span>{joinedDate}</span> */}
    </div>
  ));

export default UserTitle;
