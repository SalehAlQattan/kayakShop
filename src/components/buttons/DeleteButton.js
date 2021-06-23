import productStore from '../../stores/productsStore';
import { DeleteButtonStyled } from '../../styles';

const DeleteButton = ({ kayakId }) => {
  const handleDelete = () => {
    productStore.deleteKayak(kayakId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
