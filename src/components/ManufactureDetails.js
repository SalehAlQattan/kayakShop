import manufactureStore from '../stores/manufactureStore';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
// styles
import { DetailsContainer } from '../styles';
import productStore from '../stores/productsStore';
import KayakList from './KayakList';

const ManufactureDetails = () => {
  // param
  const manufactureSlug = useParams().manufactureSlug;
  // find
  const manufacture = manufactureStore.manufactures.find(
    (manufacture) => manufacture.slug === manufactureSlug
  );

  // ???
  const kayaks = manufacture.kayaks.map((kayak) => {
    return productStore.getKayakById(kayak.id);
  });

  return (
    <>
      <DetailsContainer>
        <h2>{manufacture.name}</h2>
        <img src={manufacture.img} alt={manufacture.name} />
      </DetailsContainer>
      <KayakList kayaks={kayaks} manufacture={manufacture} />
    </>
  );
};

export default observer(ManufactureDetails);
