import manufactureStore from '../stores/manufactureStore';
import { useParams, Redirect, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
// styles
import { DetailsContainer, BackButton } from '../styles';
import productStore from '../stores/productsStore';
import KayakList from './KayakList';

const ManufactureDetails = () => {
  const manufactureSlug = useParams().manufactureSlug;
  const manufacture = manufactureStore.manufactures.find(
    (manufacture) => manufacture.slug === manufactureSlug
  );
  const kayaks = manufacture.kayaks.map((kayak) => {
    productStore.getKayakById(kayak.id);
  });

  return (
    <>
      <DetailsContainer>
        <h2>{kayak.name}</h2>
        <img src={kayak.img} alt={kayak.name} />
      </DetailsContainer>
      <KayakList kayaks={kayaks} manufacture={manufacture} />
    </>
  );
};

export default observer(ManufactureDetails);
