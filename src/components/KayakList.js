import '../App.css';
import kayaks from '../products';
import KayakItem from './KayakItem';
import Searchbar from './Searchbar';
import { KayaksContainer } from '../styles';

import { useState } from 'react';

const KayakList = () => {
  const [query, setQuery] = useState('');

  const kayakList = kayaks
    .filter(kayak => kayak.name.toUpperCase().includes(query.toUpperCase()))
    .map(kayak => {
      return (
        <KayakItem
          img={kayak.img}
          name={kayak.name}
          price={kayak.price}
          key={kayak.id}
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
