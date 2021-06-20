// Components
import KayakItem from './KayakItem';
import SearchBar from './SearchBar';
// Styles
import { KayaksContainer } from '../styles';
// useState
import { useState } from 'react';

const KayakList = ({ deleteKayak, kayaks, setKayak }) => {
  // Delete Product

  const [query, setQuery] = useState('');

  const kayakList = kayaks
    .filter(kayak => kayak.name.toUpperCase().includes(query.toUpperCase()))
    .map(kayak => {
      return (
        <KayakItem
          deleteKayak={deleteKayak}
          key={kayaks.id}
          setKayak={setKayak}
          kayak={kayak}
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

export default KayakList;
