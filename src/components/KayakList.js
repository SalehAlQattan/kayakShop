// Default styling
import '../App.css';
// Components
import kayaks from '../products';
import KayakItem from './KayakItem';
import Searchbar from './Searchbar';
// Styles
import { KayaksContainer } from '../styles';
// useState
import { useState } from 'react';

const KayakList = props => {
  const [query, setQuery] = useState('');

  const kayakList = props.kayaks
    .filter(kayak => kayak.name.toUpperCase().includes(query.toUpperCase()))
    .map(kayak => {
      return (
        <KayakItem
          deleteKayak={props.deleteKayak}
          key={kayak.id}
          setKayak={props.setKayak}
          kayak={kayak}
        />
      );
    });

  return (
    <div>
      <Searchbar setQuery={setQuery} />
      <KayaksContainer>{kayakList}</KayaksContainer>
    </div>
  );
};

export default KayakList;
