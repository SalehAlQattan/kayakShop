import './App.css';
import Home from './components/Home';
import KayakList from './components/KayakList';
import { GlobalStyle } from './styles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />
      <KayakList />
    </div>
  );
}

export default App;
