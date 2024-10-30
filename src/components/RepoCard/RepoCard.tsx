import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import RepoInfo from '../RepoInfo/RepoInfo';
import RepoStat from '../RepoStat/RepoStat';
import RepoTitle from '../RepoTitle/RepoTitle';
import classes from './RepoCard.module.scss';
import RepositoryStore from '../../store/RepositoryStore';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const RepoCard = observer(() => {
  const { repositories, hasError, isLoading, getGitHubRepositories } = RepositoryStore;

  useEffect(() => {
    getGitHubRepositories();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (true) {
    return <ErrorMessage />;
  }

  return repositories.map((repository) => (
    <div key={repository.id} className={classes.userCard}>
      <img className={classes.avatar} src={repository.owner.avatar_url} alt="Avatar iamge" />
      <RepoTitle repository={repository} />
      <RepoStat repository={repository} />
      <RepoInfo />
    </div>
  ));
});

export default RepoCard;
