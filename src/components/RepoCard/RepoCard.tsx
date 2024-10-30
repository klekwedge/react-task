import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import RepoInfo from '../RepoInfo/RepoInfo';
import RepoStat from '../RepoStat/RepoStat';
import RepoTitle from '../RepoTitle/RepoTitle';
import classes from './RepoCard.module.scss';
import RepositoryStore from '../../store/RepositoryStore';

const RepoCard = observer(() => {
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
      <RepoTitle repository={repository} />
      <RepoStat repository={repository}/>
      <RepoInfo />
      {/* <span>Repository name: {repository.full_name}</span> */}
    </div>
  ));
});

export default RepoCard;
