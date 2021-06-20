// Default styling
import './App.css';
// Components
import Home from './components/Home';
import KayakList from './components/KayakList';
import KayakDetails from './components/KayakDetails';
// Styles
import { GlobalStyle, ToggleButton } from './styles';
import { ThemeProvider } from 'styled-components';
// useStates
import { useState } from 'react';
import importedKayaks from './products';

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

  const deleteKayak = kayakId => {
    let newFilteredKayaks = kayaks.filter(kayak => kayak.id !== kayakId);
    setKayaks(newFilteredKayaks);
  };

  return (
    <ThemeProvider theme={theme[isDarkMode ? 'dark' : 'light']}>
      <GlobalStyle />
      <ToggleButton onClick={() => setIsDarkMode(prevState => !prevState)}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </ToggleButton>
      <Home />
      {kayak ? (
        <KayakDetails
          deleteKayak={deleteKayak}
          kayak={kayak}
          setKayak={setKayak}
        />
      ) : (
        <KayakList
          deleteKayak={deleteKayak}
          kayaks={kayaks}
          setKayaks={setKayaks}
          setKayak={setKayak}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
