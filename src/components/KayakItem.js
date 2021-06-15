import '../App.css';
import { ProductContainer } from '../styles';
import DeleteButton from '../components/buttons/DeleteButton';

const KayakItem = props => {
  const kayak = props.kayak;
  return (
    <div>
      <ProductContainer onClick={() => props.setKayak(kayak)}>
        <img src={kayak.img} alt={kayak.name} />
        <h2>{kayak.name}</h2>
        <h2>{kayak.price} KD</h2>
        <DeleteButton
          deleteKayak={kayak.deleteKayak}
          kayakId={kayak.id}
          setKayak={kayak.setKayak}
        />
      </ProductContainer>
    </div>
  );
};

export default KayakItem;
