// hooks
import { useState } from 'react';
// styles
import { SignupButtonStyled } from '../../styles';
// modal
import SignupModal from '../modals/SignupModal';

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <SignupButtonStyled onClick={openModal}>sign up</SignupButtonStyled>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
