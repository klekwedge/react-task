import { observer } from 'mobx-react-lite';
import { ActionIcon, Flex, TextInput, Title } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { Repository } from '../../types';
import RepositoryStore from '../../store/RepositoryStore';

const RepoTitle = observer(({ repository }: { repository: Repository }) => {
  const { editRepository } = RepositoryStore;

  const [editId, setEditId] = useState<null | number>(null);
  const [newTitle, setNewTitle] = useState('');

  const handleEditClick = (currentRepository: Repository) => {
    setEditId(currentRepository.id);
    setNewTitle(currentRepository.name);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleTitleSave = (currentRepository: Repository) => {
    if (newTitle.trim() === '') {
      setNewTitle(currentRepository.name);
    } else {
      editRepository(currentRepository.id, newTitle);
    }
    setEditId(null);
  };

  return (
    <Flex direction="column" flex="1 1 100%">
      <Flex justify="space-between" w="100%">
        {editId === repository.id ? (
          <TextInput
            size="md"
            value={newTitle}
            onChange={handleTitleChange}
            onBlur={() => handleTitleSave(repository)}
            autoFocus
          />
        ) : (
          <Title order={2}>{repository.name}</Title>
        )}
        <ActionIcon variant="filled" onClick={() => handleEditClick(repository)} size={38}>
          <MdModeEdit size={30} />
        </ActionIcon>
      </Flex>
      <Title order={3} fw="normal">
        Owner: {repository.owner.login}
      </Title>
    </Flex>
  );
});

export default RepoTitle;
