// mobX
import { makeAutoObservable } from 'mobx';
// data
import products from '../products';
// store class
import slugify from 'slugify';
class ProductsStore {
  // data
  kayaks = products;
  // setting the constructore to watch the data
  constructor() {
    makeAutoObservable(this);
  }
  // delete products
  deleteKayak = (kayakId) => {
    let newFilteredKayaks = this.kayaks.filter((kayak) => kayak.id !== kayakId);
    this.kayaks = newFilteredKayaks;
  };
  createKayak = (newKayak) => {
    newKayak.id = this.kayaks.length + 1;
    newKayak.slug = slugify(newKayak.name);
    this.kayaks.push(newKayak);
  };
}
// creating new instance of the class
const productStore = new ProductsStore();
// exporting the new instance
export default productStore;
