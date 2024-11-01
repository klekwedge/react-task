import { observer } from 'mobx-react-lite';
import { Flex, Text, Title } from '@mantine/core';

import { Repository } from '../../types';

const stats = ['Watchers', 'Forks', 'Open issues'];

const RepoStats = observer(({ repository }: { repository: Repository }) => (
  <Flex align="center" w="100%" p="10 0" gap="20">
    {stats.map((stat) => (
      <Flex key={stat} direction="column" flex="1 1 33%" p="10 15">
        <Title order={3} fz="18">
          {stat}
        </Title>
        <Text>{repository.watchers}</Text>
      </Flex>
    ))}
  </Flex>
));

export default RepoStats;
