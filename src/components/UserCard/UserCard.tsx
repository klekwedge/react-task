import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import UserInfo from '../UserInfo/UserInfo';
import UserStat from '../UserStat/UserStat';
import UserTitle from '../UserTitle/UserTitle';
import classes from './UserCard.module.scss';
import RepositoryStore from '../../store/RepositoryStore';

const UserCard = observer(() => {
  const { repositories, getGitHubRepositories } = RepositoryStore;

  useEffect(() => {
    getGitHubRepositories();
  }, []);

  if (!repositories) {
    return null;
  }

  console.log(repositories[0]?.owner);

  return repositories.map((repository) => (
    <div key={repository.id} className={classes.userCard}>
      <img className={classes.avatar} src={repository.owner.avatar_url} alt="Avatar iamge" />
      <UserTitle user={repository.owner} />
      {/* <UserStat />
      <UserInfo /> */}
      <span>Repository name: {repository.full_name}</span>
    </div>
  ));
});

export default UserCard;
