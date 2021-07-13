// hooks
import { useState } from 'react';
// modal package
import Modal from 'react-modal';
// store
import manufactureStore from '../../stores/manufactureStore';

const ManufactureModal = ({ isOpen, closeModal }) => {
  // manufacture state
  const [manufacture, setManufacture] = useState({
    name: '',
    img: '',
  });
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    manufactureStore.createManufacture(manufacture);
    closeModal();
  };

  // getting data from the modal
  const handleChange = (event) => {
    setManufacture({ ...manufacture, [event.target.name]: event.target.value });
  };
  // handling image
  const handleImage = (event) => {
    setManufacture({ ...manufacture, img: event.target.files[0] });
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Manufacture Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="name"
                placeholder="Enter The Name"
                value={manufacture.name}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="file"
              onChange={handleImage}
              name="img"
              placeholder="Enter The IMG URL"
            />
          </div>
          <div class="d-grid gap-2">
            <button type="submit" className="btn btn-outline-primary mt-3">
              submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManufactureModal;
