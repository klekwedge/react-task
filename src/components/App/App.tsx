import { Container, MantineProvider } from '@mantine/core';
import { useState } from 'react';

import Header from '../Header/Header';
import RepoCard from '../RepoCard/RepoCard';

import '@mantine/core/styles.css';

function App() {

  return (
      <MantineProvider>
      <Container maw='700px'>
        <Header />
        <RepoCard />
      </Container>
      </MantineProvider>
  );
}

export default App;
