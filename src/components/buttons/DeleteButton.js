import productStore from '../../stores/productsStore';
import { DeleteButtonStyled } from '../../styles';

const DeleteButton = ({ deleteKayak, kayakId, setKayak }) => {
  const handleDelete = () => {
    // deleteKayak(kayakId);
    productStore.deleteKayak(kayakId);
    // setKayak(null);
    // console.log(props.kayakId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
