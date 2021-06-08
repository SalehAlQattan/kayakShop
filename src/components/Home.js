import HomePagekayak from '../images/HomePagekayak.jpg';
import '../App.css';

const Home = () => {
  return (
    <div className="App">
      <h1 className="title">Welcome to the Kayak Shop</h1>
      <h2 className="sub-title">Buy your Kayak now!</h2>
      <img className="kayak-img" src={HomePagekayak} alt="kayak img" />
    </div>
  );
};

export default Home;
