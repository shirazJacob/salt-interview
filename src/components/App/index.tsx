import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { RouteDetailsProvider } from '../../contexts/routeDetailsContext';
import RouteDetails from '../RouteDetails';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouteDetailsProvider>
        <RouteDetails />
      </RouteDetailsProvider>
    </ThemeProvider>
  );
};

export default App;
