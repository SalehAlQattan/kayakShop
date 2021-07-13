import manufactureStore from '../stores/manufactureStore';
import { observer } from 'mobx-react';
// Components
import manufactureItem from './manufactureItem';
import SearchBar from './SearchBar';
import ManufacturekModal from './modals/ManufacturekModal';
// Styles
import {
  KayaksContainer,
  RiAddCircleFillStyled,
  ListContainer,
} from '../styles';
// useState
import { useState } from 'react';

const ManufactureList = () => {
  // search state
  const [query, setQuery] = useState('');
  // add button state
  const [isOpen, setIsOpen] = useState(false);
  //
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const manufactureList = manufactureStore.manufactures
    .filter((manufacture) =>
      manufacture.name.toUpperCase().includes(query.toUpperCase())
    )
    .sort((a, b) => a.price - b.price)
    .map((manufacture) => {
      return <manufactureItem key={manufacture.id} manufacture={manufacture} />;
    });

  return (
    <ListContainer>
      <SearchBar setQuery={setQuery} />
      <RiAddCircleFillStyled onClick={openModal} size="5rem" />
      <ManufacturekModal closeModal={closeModal} isOpen={isOpen} />
      <KayaksContainer>{manufactureList}</KayaksContainer>
    </ListContainer>
  );
};

export default observer(ManufactureList);
