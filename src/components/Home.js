import HomePagekayak from '../images/HomePagekayak.jpg';
import '../App.css';
import { Title, Subtitle, HerroImage } from '../styles';

const Home = () => {
  return (
    <div className="App">
      <Title>Welcome to the Kayak Shop</Title>
      <Subtitle>Buy your Kayak now!</Subtitle>
      <HerroImage src={HomePagekayak} alt="Kayak image" />
    </div>
  );
};

export default Home;
