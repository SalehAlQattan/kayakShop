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

const Kayakdetails = () => {
  const kayakSlug = useParams().kayakSlug;
  const kayak = productStore.kayaks.find((kayak) => kayak.slug === kayakSlug);
  // check if there is no products redirect to the products list
  if (!kayak) return <Redirect to="/products" />;

  return (
    <DetailsContainer>
      <img src={kayak.img} alt={kayak.name} />
      <h2>{kayak.name}</h2>
      <h2>{kayak.price} KD</h2>
      <h2>{kayak.description}</h2>
      <Link to="/products">
        <button>Go Back</button>
      </Link>
      <DeleteButton kayakId={kayak.id} />
    </DetailsContainer>
  );
};
// the observer rerender the page after the changes
export default observer(Kayakdetails);
