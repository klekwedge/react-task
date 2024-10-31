import { observer } from 'mobx-react-lite';
import { useEffect, useState, useCallback } from 'react';

import { Button } from '@mantine/core';

import RepoStat from '../RepoStat/RepoStat';
import RepoTitle from '../RepoTitle/RepoTitle';
import classes from './RepoCard.module.scss';
import RepositoryStore from '../../store/RepositoryStore';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ITEM_HEIGHT = 480;
const BUFFER = 3;

const RepoCard = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const { repositories, hasError, isLoading, getGitHubRepositories, deleteRepository } = RepositoryStore;

  const [scrollPosition, setScrollPosition] = useState(0);
  const visibleStartIndex = Math.max(0, Math.floor(scrollPosition / ITEM_HEIGHT) - BUFFER);
  const visibleEndIndex = Math.min(
    repositories.length,
    Math.floor((scrollPosition + window.innerHeight) / ITEM_HEIGHT) + BUFFER
  );

  useEffect(() => {
    if (!isLoading) {
      getGitHubRepositories(currentPage);
    }
  }, [currentPage]);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight &&
      !isLoading &&
      !hasError
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [isLoading, hasError]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={classes.repoList} style={{ height: repositories.length * ITEM_HEIGHT }}>
      <div style={{ paddingTop: visibleStartIndex * ITEM_HEIGHT }}>
        {repositories.slice(visibleStartIndex, visibleEndIndex).map((repository) => (
          <div key={repository.id} className={classes.userCard} style={{ height: ITEM_HEIGHT }}>
            <img className={classes.avatar} src={repository.owner.avatar_url} alt="Owner avatar" />
            <RepoTitle repository={repository} />
            <RepoStat repository={repository} />
            <Button onClick={() => deleteRepository(repository.id)}>Delete</Button>
          </div>
        ))}
      </div>
      {isLoading && <Spinner />}
      {hasError && <ErrorMessage />}
    </div>
  );
});

export default RepoCard;
