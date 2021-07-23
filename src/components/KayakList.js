import { observer } from 'mobx-react';
// Components
import KayakItem from './KayakItem';
import SearchBar from './SearchBar';
import KayakModal from './modals/KayakModal';
// Styles
import {
  KayaksContainer,
  RiAddCircleFillStyled,
  ListContainer,
} from '../styles';
// useState
import { useState } from 'react';
import authtStore from '../stores/authStore';

const KayakList = ({ manufacture, kayaks }) => {
  // search state
  const [query, setQuery] = useState('');
  // add button state
  const [isOpen, setIsOpen] = useState(false);
  //
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const kayakList = kayaks
    .filter((kayak) => kayak.name.toUpperCase().includes(query.toUpperCase()))
    .sort((a, b) => a.price - b.price)
    .map((kayak) => {
      return <KayakItem key={kayak.id} kayak={kayak} />;
    });

  return (
    <ListContainer>
      <SearchBar setQuery={setQuery} />
      {authtStore.user && (
        <RiAddCircleFillStyled onClick={openModal} size="5rem" />
      )}
      <KayakModal
        closeModal={closeModal}
        isOpen={isOpen}
        manufacture={manufacture}
      />
      <KayaksContainer>{kayakList}</KayaksContainer>
    </ListContainer>
  );
};

export default observer(KayakList);
