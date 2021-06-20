import "../App.css";
import { ProductContainer } from "../styles";
import DeleteButton from "../components/buttons/DeleteButton";

const KayakItem = ({ setKayak, kayak, deleteKayak }) => {
  return (
    <div>
      <ProductContainer>
        <img onClick={() => setKayak(kayak)} src={kayak.img} alt={kayak.name} />
        <h2>{kayak.name}</h2>
        <h2>{kayak.price} KD</h2>
        <DeleteButton
          deleteKayak={deleteKayak}
          kayakId={kayak.id}
          setKayak={setKayak}
        />
      </ProductContainer>
    </div>
  );
};

export default KayakItem;
