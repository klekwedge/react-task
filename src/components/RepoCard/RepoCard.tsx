import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import RepositoryStore from '../../store/RepositoryStore';

import RepoInfo from '../RepoInfo/RepoInfo';
import RepoStat from '../RepoStat/RepoStat';
import RepoTitle from '../RepoTitle/RepoTitle';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import classes from './RepoCard.module.scss';

const RepoCard = observer(() => {
  const [currentPage, setCurrentPage] = useState(1)
  const { repositories, hasError, isLoading, getGitHubRepositories } = RepositoryStore;

  useEffect(() => {
    getGitHubRepositories(currentPage);
  }, [currentPage]);

  if (isLoading) {
    return <Spinner />;
  }

  if (hasError) {
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
