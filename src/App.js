import './App.css';
import Home from './components/Home';
import KayakList from './components/KayakList';
import { GlobalStyle } from './styles';
import { ThemeProvider } from 'styled-components';

const theme = {
  mainColor: '#293b5f',
  backgroundColor: '#dbe6fd',
  secondColor: 'blue',
  // https://colorhunt.co/palette/290257
  // #293b5f
  // #47597e
  // #dbe6fd
  // #b2ab8c
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <KayakList />
    </ThemeProvider>
  );
}

export default App;
