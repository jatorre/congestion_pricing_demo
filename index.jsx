import React from 'react';
import {createRoot} from 'react-dom/client';
import Main from './components/Main/Main';
import {createTheme} from './carto-theme';
import {CssBaseline, ThemeProvider} from '@material-ui/core';
import {AppStateStore} from './state';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStateStore>
        <CssBaseline />
        <Main />
      </AppStateStore>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
createRoot(container).render(<App />);
