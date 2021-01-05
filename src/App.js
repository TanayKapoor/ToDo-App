import React from 'react';
import { Header } from './components/layout/header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = () => (
  <SelectedProjectProvider>
    <div className="App">
      <Header />
      <Content />
    </div>
  </SelectedProjectProvider>
);
