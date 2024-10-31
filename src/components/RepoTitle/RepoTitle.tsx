import { observer } from 'mobx-react-lite';
import { Flex, Title } from '@mantine/core';
import { Repository } from '../../types';

const RepoTitle = observer(({ repository }: { repository: Repository }) => (
    <Flex direction='column'>
      <Title order={2}>{repository.name}</Title>
      <Title order={3} fw='normal'>Owner: {repository.owner.login}</Title>
    </Flex>
  ));

export default RepoTitle;
