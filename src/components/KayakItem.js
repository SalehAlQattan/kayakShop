import '../App.css';
import { ProductContainer } from '../styles';

const KayakItem = props => {
  return (
    <div>
      <ProductContainer onClick={() => props.setKayak(props.kayak)}>
        <img src={props.img} alt={props.name} />
        <h2>{props.name}</h2>
        <h2>{props.price} KD</h2>
      </ProductContainer>
    </div>
  );
};

export default KayakItem;
