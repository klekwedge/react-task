import { observer } from 'mobx-react-lite';
import { useEffect, useState, useCallback } from 'react';

import RepoInfo from '../RepoInfo/RepoInfo';
import RepoStat from '../RepoStat/RepoStat';
import RepoTitle from '../RepoTitle/RepoTitle';
import classes from './RepoCard.module.scss';
import RepositoryStore from '../../store/RepositoryStore';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const RepoCard = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [isFetching, setIsFetching] = useState(false);
  const { repositories, hasError, isLoading, getGitHubRepositories } = RepositoryStore;

  useEffect(() => {
    if(!isLoading){
      getGitHubRepositories(currentPage);
    }
  }, [currentPage]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight &&
      !isLoading
    ) {
      setCurrentPage(currentPage + 1);
    }
  }, [isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  if (isLoading && currentPage === 1) {
    return <Spinner />;
  }

  if (hasError) {
    return <ErrorMessage />;
  }

  return (
    <div className={classes.repoList}>
      {repositories.map((repository) => (
        <div key={repository.id} className={classes.userCard}>
          <img className={classes.avatar} src={repository.owner.avatar_url} alt="Avatar" />
          <RepoTitle repository={repository} />
          <RepoStat repository={repository} />
          <RepoInfo />
        </div>
      ))}
      {isLoading && <Spinner />}
    </div>
  );
});

export default RepoCard;
