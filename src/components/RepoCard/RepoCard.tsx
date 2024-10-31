import { observer } from 'mobx-react-lite';
import { useEffect, useState, useCallback } from 'react';

import { Avatar, Button, Card, Flex } from '@mantine/core';

import RepoStat from '../RepoStat/RepoStat';
import RepoTitle from '../RepoTitle/RepoTitle';
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
    Math.floor((scrollPosition + window.innerHeight) / ITEM_HEIGHT) + BUFFER,
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
    <>
      <Flex direction='column' gap='40'>
        {repositories.slice(visibleStartIndex, visibleEndIndex).map((repository) => (
          <Card key={repository.id} shadow="sm" padding="xl" withBorder>
            <Avatar radius="sm" src={repository.owner.avatar_url} w={160} />
              <RepoTitle repository={repository} />
              <RepoStat repository={repository} />
              <Button onClick={() => deleteRepository(repository.id)}>Delete</Button>
          </Card>
        ))}
      </Flex>
      {isLoading && <Spinner />}
      {hasError && <ErrorMessage />}
    </>
  );
});

export default RepoCard;
