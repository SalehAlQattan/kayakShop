import { DetailsContainer } from '../styles';

const Kayakdetails = props => {
  return (
    <DetailsContainer>
      <img src={props.kayak.img} alt={props.kayak.name} />
      <h2>{props.kayak.name}</h2>
      <h2>{props.kayak.price} KD</h2>
      <h2>{props.kayak.description}</h2>
      <button onClick={() => props.setKayak(null)}>Go Back</button>
    </DetailsContainer>
  );
};

export default Kayakdetails;
