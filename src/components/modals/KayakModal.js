// hooks
import { useState } from 'react';
// modal package
import Modal from 'react-modal';
// store
import productStore from '../../stores/productsStore';

const KayakModal = ({ isOpen, closeModal, oldKayak }) => {
  // kayak state
  const [kayak, setKayak] = useState(
    oldKayak
      ? oldKayak
      : {
          name: '',
          description: '',
          price: 0,
          img: '',
        }
  );
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldKayak) productStore.updateKayak(kayak);
    else productStore.createKayak(kayak);
    closeModal();
  };

  // getting data from the modal
  const handleChange = (event) => {
    setKayak({ ...kayak, [event.target.name]: event.target.value });
  };
  // handling image
  const handleImage = (event) => {
    setKayak({ ...kayak, img: event.target.files[0] });
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Kayak Modal"
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
                value={kayak.name}
              />
            </div>
            <div className="col-6">
              <label>Price</label>
              <input
                className="form-control"
                type="number"
                min="1"
                onChange={handleChange}
                name="price"
                placeholder="Enter The Price"
                value={kayak.price}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="description"
              placeholder="Enter The Description"
              value={kayak.description}
            />
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
              {oldKayak ? 'UPDATE' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default KayakModal;
