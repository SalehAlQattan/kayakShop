import NavBar from './components/NavBar';
import Routes from './components/Routes';
// Styles
import { GlobalStyle } from './styles';
import { ThemeProvider } from 'styled-components';
// useStates
import { useState } from 'react';

// mobx
import { observer } from 'mobx-react';

// stores
import productStore from './stores/productsStore';
import manufactureStore from './stores/manufactureStore';

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

  return (
    <ThemeProvider theme={theme[isDarkMode ? 'dark' : 'light']}>
      <GlobalStyle />
      <NavBar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      {productStore.loading || manufactureStore.loading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
