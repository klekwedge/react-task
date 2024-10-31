import { Container, MantineProvider } from '@mantine/core';

import RepoCard from '../RepoCard/RepoCard';

import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <Container maw="600px" p='20px 0px'>
        <RepoCard />
      </Container>
    </MantineProvider>
  );
}

export default App;
