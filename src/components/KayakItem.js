import '../App.css';
// styles
import { ProductContainer } from '../styles';
// components
import DeleteButton from '../components/buttons/DeleteButton';
// router
import { Link } from 'react-router-dom';

const KayakItem = ({ setKayak, deleteKayak, kayak }) => {
  return (
    <div>
      <ProductContainer>
        <Link to={`/kayaks/${kayak.slug}`}>
          <img
            onClick={() => setKayak(kayak)}
            src={kayak.img}
            alt={kayak.name}
          />
        </Link>
        <h2>{kayak.name}</h2>
        <h2>{kayak.price} KD</h2>
        <DeleteButton kayakId={kayak.id} />
      </ProductContainer>
    </div>
  );
};

export default KayakItem;
