// improting packages
import { makeAutoObservable } from 'mobx';
import instance from './instance';
// class store
class ProductsStore {
  // empty array to store fetched data in
  kayaks = [];
  loading = true;
  // setting the constructor to watch the data
  constructor() {
    makeAutoObservable(this);
  }
  // fetting data
  fetchKayaks = async () => {
    try {
      const response = await instance.get('/kayaks');
      this.kayaks = response.data;
      this.loading = false;
      console.log(this.loading);
    } catch (error) {
      console.error('fetch kayak: ', error);
    }
  };
  // delete products
  deleteKayak = async (kayakId) => {
    try {
      await instance.delete(`/kayaks/${kayakId}`);
      let newFilteredKayaks = this.kayaks.filter(
        (kayak) => kayak.id !== kayakId
      );
      this.kayaks = newFilteredKayaks;
    } catch (error) {
      console.error(error);
    }
  };
  // create new kayak
  createKayak = async (newKayak, manufacture) => {
    try {
      const formData = new FormData();
      for (const key in newKayak) formData.append(key, newKayak[key]);
      const response = await instance.post(
        `/manufactures/${manufacture.id}/kayaks`,
        formData
      );
      this.kayaks.push(response.data);
      manufacture.kayaks.push({ id: response.data.id });
    } catch (error) {
      console.error(error);
    }
  };
  // update kayak
  updateKayak = async (updatedKayak) => {
    try {
      const formData = new FormData();
      for (const key in updatedKayak) formData.append(key, updatedKayak[key]);
      const response = await instance.put(
        `/kayaks/${updatedKayak.id}`,
        formData
      );
      const kayak = this.kayaks.find((kayak) => kayak.id === updatedKayak.id);
      for (const key in kayak) kayak[key] = response.data[key];
    } catch (error) {
      console.error(error);
    }
  };
  // ???
  getKayakById = (kayakId) => this.kayaks.find((kayak) => kayak.id === kayakId);
}
// creating new instance of the class
const productStore = new ProductsStore();
// fetching data on load
productStore.fetchKayaks();
// exporting the new instance
export default productStore;
