import '../App.css';

const KayakItem = props => {
  return (
    <div>
      <img className="product-img" src={props.img} alt={props.name} />
      <h2 className="product-title">{props.name}</h2>
      <h2 className="product-price">{props.price} KD</h2>
    </div>
  );
};

export default KayakItem;
