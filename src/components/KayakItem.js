// styles
import { ProductContainer } from '../styles';
// components
import DeleteButton from '../components/buttons/DeleteButton';
import UpdateButton from './buttons/UpdateButton';
// router
import { Link } from 'react-router-dom';
// mobx observer to watch the edit
import { observer } from 'mobx-react';
// store
import authtStore from '../stores/authStore';

const KayakItem = ({ kayak }) => {
  return (
    <ProductContainer>
      <Link to={`/kayaks/${kayak.slug}`}>
        <img src={kayak.img} alt={kayak.name} />
      </Link>
      <h2>{kayak.name}</h2>
      <h2>{kayak.price} KD</h2>
      {authtStore.user && (
        <>
          <DeleteButton kayakId={kayak.id} />
          <UpdateButton kayak={kayak} />
        </>
      )}
    </ProductContainer>
  );
};

export default observer(KayakItem);
