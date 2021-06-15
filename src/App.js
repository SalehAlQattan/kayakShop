// Default styling
import './App.css';
// Components
import Home from './components/Home';
import KayakList from './components/KayakList';
import Kayakdetails from './components/Kayakdetails';
// Styles
import { GlobalStyle, ToggleButton } from './styles';
import { ThemeProvider } from 'styled-components';

// States
import { useState } from 'react';
// Data
import kayaks from './products';

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
  const [currentTheme, setCurrentTheme] = useState('light');
  // Chainging the dark mode button state
  const [buttonText, setButtonText] = useState('Dark Mode');
  // Switch between one product or the whole list
  const [kayak, setKayak] = useState(null);
  // Delete state
  const [_kayaks, setKayaks] = useState(kayaks);

  // Delete Product
  const deleteKayak = kayakId => {
    const filteredKayak = _kayaks.filter(kayak => kayak.id !== kayakId);
    setKayak(filteredKayak);
  };
  // Function to toggle the theme
  const toggleTheme = () => {
    currentTheme === 'light'
      ? setCurrentTheme('dark')
      : setCurrentTheme('light');
  };
  // Function to toggle the dark mode button
  const toggleText = () => {
    buttonText === 'Dark Mode'
      ? setButtonText('Light Mode')
      : setButtonText('Dark Mode');
  };
  // Switch between one product or the whole list
  const setView = () => {
    return kayak ? (
      <Kayakdetails kayak={kayak} setKayak={setKayak} />
    ) : (
      <KayakList
        deleteKayak={deleteKayak}
        kayaks={_kayaks}
        setKayak={setKayak}
      />
    );
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ToggleButton
        onClick={() => {
          toggleTheme();
          toggleText();
        }}
      >
        {buttonText}
      </ToggleButton>
      <Home />
      {setView()}
    </ThemeProvider>
  );
}

export default App;
