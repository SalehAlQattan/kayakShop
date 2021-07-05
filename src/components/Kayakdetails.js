// store class
import productStore from '../stores/productsStore';
// observer state
import { observer } from 'mobx-react';
// styles
import { DetailsContainer, BackButton } from '../styles';
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '50px',
          marginTop: '50px',
        }}
      >
        <Link to="/products">
          <BackButton>Go Back</BackButton>
        </Link>
        <DeleteButton kayakId={kayak.id} />
      </div>
    </DetailsContainer>
  );
};
// the observer rerender the page after the changes
export default observer(Kayakdetails);
