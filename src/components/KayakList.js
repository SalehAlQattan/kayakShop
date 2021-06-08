import '../App.css';
import kayaks from '../products';
import KayakItem from './KayakItem';

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

  return <div className="kayaks">{kayakList}</div>;
};

export default KayakList;
