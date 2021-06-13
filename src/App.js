// Default styling
import './App.css';
// Components
import Home from './components/Home';
import KayakList from './components/KayakList';
// Styles
import { GlobalStyle, ToggleButton } from './styles';
import { ThemeProvider } from 'styled-components';

// States
import { useState } from 'react';

const theme = {
  dark: {
    mainColor: '#dbe6fd',
    backgroundColor: '#293b5f',
  },
  light: {
    mainColor: '#293b5f',
    backgroundColor: '#dbe6fd',
  },
};

function App() {
  // Changing the theme state
  const [currentTheme, setCurrentTheme] = useState('light');
  // Chainging the dark mode button state
  const [buttonText, setButtonText] = useState('Dark Mode');

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
      <KayakList />
    </ThemeProvider>
  );
}

export default App;
