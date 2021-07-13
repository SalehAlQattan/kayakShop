// router
import { Route, Switch } from 'react-router';
// components
import Home from './Home';
import KayakList from './KayakList';
import KayakDetails from './KayakDetails';
// stores
import productStore from '../stores/productsStore';
import manufactureStore from '../stores/manufactureStore';
// hooks
import { useEffect } from 'react';
import { observer } from 'mobx-react';

const Routes = () => {
  useEffect(() => {
    productStore.fetchKayaks();
    manufactureStore.fetchManufacture();
  }, []);

  if (manufactureStore.loading || productStore.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/kayaks/:kayakSlug">
        <KayakDetails />
      </Route>
      <Route path="/products">
        <KayakList />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
