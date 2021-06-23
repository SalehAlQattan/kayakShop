// Default styling
import './App.css';
// Components
import Home from './components/Home';
import KayakList from './components/KayakList';
import KayakDetails from './components/KayakDetails';
import NavBar from './components/NavBar';
// Styles
import { GlobalStyle } from './styles';
import { ThemeProvider } from 'styled-components';
// useStates
import { useState } from 'react';
// data
import importedKayaks from './products';
// router
import { Route, Switch } from 'react-router';

// Website theme
const theme = {
  dark: {
    mainColor: '#dbe6fd',
    backgroundColor: '#293b5f',
    red: 'red',
  },
  light: {
    mainColor: '#293b5f',
    backgroundColor: '#dbe6fd',
    red: 'red',
  },
};

function App() {
  // Changing the theme state
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Switch between one product or the whole list
  const [kayak, setKayak] = useState(null);
  const [kayaks, setKayaks] = useState(importedKayaks);

  return (
    <ThemeProvider theme={theme[isDarkMode ? 'dark' : 'light']}>
      <GlobalStyle />
      <NavBar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/kayaks/:kayakSlug">
          <KayakDetails kayak={kayak} kayaks={kayaks} />
        </Route>
        <Route path="/products">
          <KayakList
            kayaks={kayaks}
            setKayaks={setKayaks}
            setKayak={setKayak}
          />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
