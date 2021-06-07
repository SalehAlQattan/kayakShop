import './App.css';
import kayak from './images/kayak.jpg';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Kayak Shop</h1>
      <p>Buy your Kayak now!</p>
      <img className="kayak-img" src={kayak} />
    </div>
  );
}

export default App;
