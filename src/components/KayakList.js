import '../App.css';
import kayaks from '../products';
import KayakItem from './KayakItem';
import { KayaksContainer } from '../styles';

const KayakList = () => {
  const kayakList = kayaks.map(kayak => {
    return (
      <KayakItem
        name={kayak.name}
        price={kayak.price}
        img={kayak.img}
        key={kayak.id}
      />
    );
  });

  return <KayaksContainer>{kayakList}</KayaksContainer>;
};

export default KayakList;
