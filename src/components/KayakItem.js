import '../App.css';
import { ProductContainer } from '../styles';
import DeleteButton from '../components/buttons/DeleteButton';

const KayakItem = props => {
  return (
    <div>
      <ProductContainer>
        <img
          onClick={() => props.setKayak(props.kayak)}
          src={props.kayak.img}
          alt={props.kayak.name}
        />
        <h2>{props.kayak.name}</h2>
        <h2>{props.kayak.price} KD</h2>
        <DeleteButton
          deleteKayak={props.kayak.deleteKayak}
          kayakId={props.kayak.id}
          setKayak={props.kayak.setKayak}
        />
      </ProductContainer>
    </div>
  );
};

export default KayakItem;
