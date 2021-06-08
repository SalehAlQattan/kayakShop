import './App.css';
import HomePagekayak from './images/HomePagekayak.jpg';
import kayaks from './products';

function App() {
  const kayakList = kayaks.map(kayak => {
    return (
      <div className="product-container">
        <img className="product-img" src={kayak.img} alt={kayak.name} />
        <h2 className="product-title">{kayak.name}</h2>
        <h3 className="product-price">{kayak.price} KD</h3>
      </div>
    );
  });

  return (
    <div className="App">
      <h1 className="title">Welcome to the Kayak Shop</h1>
      <h2 className="sub-title">Buy your Kayak now!</h2>
      <img className="kayak-img" src={HomePagekayak} alt="kayak img" />
      <div className="kayaks">{kayakList}</div>
    </div>
  );
}

export default App;
