import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/home';
import { MockServer } from './services/miragejs/MockServer';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const environment = process.env.NODE_ENV;
if (environment !== 'production') {
  MockServer({ environment });
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
