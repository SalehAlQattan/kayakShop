// improting packages
import { makeAutoObservable } from 'mobx';
import slugify from 'slugify';
import axios from 'axios';
// class store
class ProductsStore {
  // empty array to store fetched data in
  kayaks = [];
  // setting the constructor to watch the data
  constructor() {
    makeAutoObservable(this);
  }
  // fetting data
  fetchKayaks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/kayaks');
      this.kayaks = response.data;
    } catch (error) {
      console.error('fetch kayak: ', error);
    }
  };
  // delete products
  deleteKayak = async (kayakId) => {
    try {
      await axios.delete(`http://localhost:8000/kayaks/${kayakId}`);
      let newFilteredKayaks = this.kayaks.filter(
        (kayak) => kayak.id !== kayakId
      );
      this.kayaks = newFilteredKayaks;
    } catch (error) {
      console.error(error);
    }
  };
  // create new kayak
  createKayak = async (newKayak) => {
    try {
      const formData = new FormData();
      for (const key in newKayak) formData.append(key, newKayak[key]);
      const response = await axios.post(
        'http://localhost:8000/kayaks',
        formData
      );
      this.kayaks.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // update kayak
  updateKayak = async (updatedKayak) => {
    try {
      const formData = new FormData();
      for (const key in updatedKayak) formData.append(key, updatedKayak[key]);
      const response = await axios.put(
        `http://localhost:8000/kayaks/${updatedKayak.id}`,
        formData
      );
      const kayak = this.kayaks.find((kayak) => kayak.id === updatedKayak.id);
      for (const key in kayak) kayak[key] = response.data[key];
    } catch (error) {
      console.error(error);
    }
  };
}
// creating new instance of the class
const productStore = new ProductsStore();
// fetching data on load
productStore.fetchKayaks();
// exporting the new instance
export default productStore;
