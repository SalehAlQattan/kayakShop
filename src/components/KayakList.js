import productStore from '../stores/productsStore';
import { observer } from 'mobx-react';
// Components
import KayakItem from './KayakItem';
import SearchBar from './SearchBar';
// Styles
import { KayaksContainer } from '../styles';
// useState
import { useState } from 'react';

const KayakList = () => {
  const [query, setQuery] = useState('');
  const kayakList = productStore.kayaks
    .filter((kayak) => kayak.name.toUpperCase().includes(query.toUpperCase()))
    .map((kayak) => {
      return <KayakItem key={kayak.id} kayak={kayak} />;
    });

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <KayaksContainer>{kayakList}</KayaksContainer>
    </div>
  );
};

export default observer(KayakList);
