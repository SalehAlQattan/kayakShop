// improting packages
import { makeAutoObservable } from 'mobx';
import instance from './instance';
import decode from 'jwt-decode';
// store class
class AuthStore {
  user = null;
  // setting the constructor to watch the data
  constructor() {
    makeAutoObservable(this);
  }
  // create new user
  signup = async (newUser) => {
    try {
      const res = await instance.post('/signup', newUser);
      await instance.post('/signup', newUser);
      this.setUser(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };
  //
  signin = async (userDate) => {
    try {
      const res = await instance.post('/signin', userDate);
      this.setUser(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };
  setUser = (token) => {
    localStorage.setItem('myToken', token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };
  signuot = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem('myToken');
    this.user = null;
  };
  checkForToken = () => {
    const token = localStorage.getItem('myToken');
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signuot();
      }
    }
  };
}
// creating new instance of the class
const authtStore = new AuthStore();
// auto signin
authtStore.checkForToken();
// exporting the new instance
export default authtStore;
