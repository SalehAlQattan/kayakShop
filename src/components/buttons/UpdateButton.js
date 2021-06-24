// styles
import { UpdateButtonStyled } from '../../styles';
// hooks
import { useState } from 'react';
// modal
import KayakModal from '../modals/KayakModal';

const UpdateButton = ({ kayak }) => {
  // modal state
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <KayakModal oldKayak={kayak} isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default UpdateButton;
