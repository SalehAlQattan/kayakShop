import '../App.css';
import { ProductImage, ProductTitle, ProductPrice } from '../styles';

const KayakItem = props => {
  return (
    <div>
      <ProductImage src={props.img} alt={props.name} />
      <ProductTitle>{props.name}</ProductTitle>
      <ProductPrice>{props.price} KD</ProductPrice>
    </div>
  );
};

export default KayakItem;
