import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ChatApp from 'components/ChatApp';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ChatApp />
      </ThemeProvider>
    </Router>
  );
}

export default App;
