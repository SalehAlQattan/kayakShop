import { DetailsContaioner } from '../styles';

const Kayakdetails = props => {
  return (
    <DetailsContaioner>
      <img src={props.kayaks.img} alt={props.kayaks.name} />
      <h2>{props.kayaks.name}</h2>
      <h2>{props.kayaks.price}</h2>
      <h2>{props.kayaks.description}</h2>
    </DetailsContaioner>
  );
};

export default Kayakdetails;
