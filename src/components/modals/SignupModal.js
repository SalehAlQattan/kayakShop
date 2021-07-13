// hooks
import { useState } from 'react';
// modal package
import Modal from 'react-modal';
// store
import authtStore from '../../stores/authStore';

const UserModal = ({ isOpen, closeModal }) => {
  // usre state
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    authtStore.signup(user);
    closeModal();
  };

  // getting data from the modal
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="User Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>User Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="username"
                placeholder="Enter Your User Name"
              />
            </div>
            <div className="col-6">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Enter Your Password"
              />
            </div>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" className="btn btn-outline-primary mt-3">
              singup
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UserModal;
