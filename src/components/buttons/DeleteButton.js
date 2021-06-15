import { DeleteButtonStyled } from '../../styles';

const DeleteButton = props => {
  const handleDelete = () => {
    props.deleteKayak(props.kayakId);
    props.setKayak(null);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
