// store class
import productStore from '../stores/productsStore';
// observer state
import { observer } from 'mobx-react';
// styles
import { DetailsContainer } from '../styles';
// components
import DeleteButton from './buttons/DeleteButton';
// router
import { useParams, Redirect, Link } from 'react-router-dom';

const Kayakdetails = ({ setKayak, deleteKayak, kayaks }) => {
  const kayakSlug = useParams().kayakSlug;
  const kayak = productStore.kayaks.find((kayak) => kayak.slug === kayakSlug);

  if (!kayak) return <Redirect to="/products" />;

  return (
    <DetailsContainer>
      <img src={kayak.img} alt={kayaks.name} />
      <h2>{kayak.name}</h2>
      <h2>{kayak.price} KD</h2>
      <h2>{kayak.description}</h2>
      <Link to="/products">
        <button>Go Back</button>
      </Link>
      <DeleteButton
        deleteKayak={deleteKayak}
        setKayak={setKayak}
        kayakId={kayak.id}
      />
    </DetailsContainer>
  );
};

export default observer(Kayakdetails);
