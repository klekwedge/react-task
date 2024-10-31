import { Container, MantineProvider } from '@mantine/core';

import Header from '../Header/Header';
import RepoCard from '../RepoCard/RepoCard';

import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <Container maw="600px" fluid>
        <Header />
        <RepoCard />
      </Container>
    </MantineProvider>
  );
}

export default App;
