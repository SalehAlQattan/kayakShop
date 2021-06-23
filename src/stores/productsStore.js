// pakages
import { makeAutoObservable } from 'mobx';
// data
import products from '../products';
class ProductsStore {
  kayaks = products;
  constructor() {
    makeAutoObservable(this);
  }
  // delete products
  deleteKayak = (kayakId) => {
    let newFilteredKayaks = this.kayaks.filter((kayak) => kayak.id !== kayakId);
    this.kayaks = newFilteredKayaks;
  };
}
const productStore = new ProductsStore();
export default productStore;
