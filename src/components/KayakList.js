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

  const kayakList = kayaks
    .filter(kayak => kayak.name.toUpperCase().includes(query.toUpperCase()))
    .map(kayak => {
      return (
        <KayakItem
          // img={kayak.img}
          // name={kayak.name}
          // price={kayak.price}
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
