// hooks
import { useState } from 'react';
// styles
import { SigninButtonStyled } from '../../styles';
// modal
import SigninModal from '../modals/SigninModal';

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <SigninButtonStyled onClick={openModal}>sign in</SigninButtonStyled>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;
