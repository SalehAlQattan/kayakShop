import productStore from '../stores/productsStore';
import { observer } from 'mobx-react';
// Components
import KayakItem from './KayakItem';
import SearchBar from './SearchBar';
// Styles
import { KayaksContainer } from '../styles';
// useState
import { useState } from 'react';

const KayakList = ({ deleteKayak, kayaks, setKayak }) => {
  const [query, setQuery] = useState('');
  const kayakList = productStore.kayaks
    .filter((kayak) => kayak.name.toUpperCase().includes(query.toUpperCase()))
    .map((kayak) => {
      return (
        <KayakItem
          deleteKayak={deleteKayak}
          key={kayaks.id}
          setKayak={setKayak}
          kayak={kayak}
          kayaks={kayaks}
        />
      );
    });

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <KayaksContainer>{kayakList}</KayaksContainer>
    </div>
  );
};

export default observer(KayakList);
