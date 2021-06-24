import '../App.css';
// styles
import { ProductContainer } from '../styles';
// components
import DeleteButton from '../components/buttons/DeleteButton';
import UpdateButton from './buttons/UpdateButton';
// router
import { Link } from 'react-router-dom';
//
import { observer } from 'mobx-react';

const KayakItem = ({ kayak }) => {
  return (
    <div>
      <ProductContainer>
        <Link to={`/kayaks/${kayak.slug}`}>
          <img src={kayak.img} alt={kayak.name} />
        </Link>
        <h2>{kayak.name}</h2>
        <h2>{kayak.price} KD</h2>
        <DeleteButton kayakId={kayak.id} />
        <UpdateButton kayak={kayak} />
      </ProductContainer>
    </div>
  );
};

export default observer(KayakItem);
