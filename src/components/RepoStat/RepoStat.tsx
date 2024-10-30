import { observer } from 'mobx-react-lite';
import classes from './RepoStat.module.scss';
import { Repository } from '../../types';

const RepoStat = observer(({ repository }: { repository: Repository }) => (
    <div className={classes.userStat}>
      <div className={classes.info}>
        <div className={classes.infoTitle}>Watchers</div>
        <div className={classes.infoNumber}>{repository.watchers}</div>
      </div>
      <div className={classes.info}>
        <div className={classes.infoTitle}>Forks</div>
        <div className={classes.infoNumber}>{repository.forks}</div>
      </div>
      <div className={classes.info}>
        <div className={classes.infoTitle}>Open issues</div>
        <div className={classes.infoNumber}>{repository.open_issues}</div>
      </div>
    </div>
  ));

export default RepoStat;
