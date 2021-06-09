import HomePagekayak from '../images/HomePagekayak.jpg';
import '../App.css';
import { HerroImage } from '../styles';

const Home = () => {
  return (
    <div className="App">
      <h1>Welcome to the Kayak Shop</h1>
      <h2>Buy your Kayak now!</h2>
      <HerroImage src={HomePagekayak} alt="Kayak image" />
    </div>
  );
};

export default Home;
