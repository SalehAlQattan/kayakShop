import productStore from '../stores/productsStore';
import { observer } from 'mobx-react';
// Components
import KayakItem from './KayakItem';
import SearchBar from './SearchBar';
import KayakModal from './modals/KayakModal';
// Styles
import { KayaksContainer, RiAddCircleFillStyled } from '../styles';
// useState
import { useState } from 'react';

const KayakList = () => {
  // search state
  const [query, setQuery] = useState('');
  // add button state
  const [isOpen, setIsOpen] = useState(false);
  //
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const kayakList = productStore.kayaks
    .filter((kayak) => kayak.name.toUpperCase().includes(query.toUpperCase()))
    .sort((a, b) => a.price - b.price)
    .map((kayak) => {
      return <KayakItem key={kayak.id} kayak={kayak} />;
    });

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <RiAddCircleFillStyled onClick={openModal} size="5rem" />
      <KayakModal closeModal={closeModal} isOpen={isOpen} />
      <KayaksContainer>{kayakList}</KayaksContainer>
    </div>
  );
};

export default observer(KayakList);
