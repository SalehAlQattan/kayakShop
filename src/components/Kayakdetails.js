import { DetailsContainer } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const Kayakdetails = ({ kayak, setKayak, deleteKayak }) => {
  return (
    <DetailsContainer>
      <img src={kayak.img} alt={kayak.name} />
      <h2>{kayak.name}</h2>
      <h2>{kayak.price} KD</h2>
      <h2>{kayak.description}</h2>
      <button onClick={() => setKayak(null)}>Go Back</button>
      <DeleteButton
        deleteKayak={deleteKayak}
        setKayak={setKayak}
        kayakId={kayak.id}
      />
    </DetailsContainer>
  );
};

export default Kayakdetails;
