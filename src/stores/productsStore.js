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
      const respons = await axios.get('http://localhost:8000/kayaks');
      this.kayaks = respons.data;
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
  createKayak = (newKayak) => {
    newKayak.id = this.kayaks.length + 1;
    newKayak.slug = slugify(newKayak.name);
    this.kayaks.push(newKayak);
  };
  // update kayak
  updateKayak = (updatedKayak) => {
    const kayak = this.kayaks.find((kayak) => kayak.id === updatedKayak.id);
    kayak.name = updatedKayak.name;
    kayak.price = updatedKayak.price;
    kayak.description = updatedKayak.description;
    kayak.img = updatedKayak.img;
    kayak.slug = slugify(updatedKayak.name);
  };
}
// creating new instance of the class
const productStore = new ProductsStore();
// fetching data on load
productStore.fetchKayaks();
// exporting the new instance
export default productStore;
