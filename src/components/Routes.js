// router
import { Route, Switch } from 'react-router';
// components
import Home from './Home';
import KayakList from './KayakList';
import KayakDetails from './KayakDetails';

import ManufactureList from './ManufactureList';
import ManufactureDetails from './ManufactureDetails';

// mobx
import { observer } from 'mobx-react';

// stores
import productStore from '../stores/productsStore';

const Routes = () => {
  return (
    <Switch>
      <Route path="/kayaks/:kayakSlug">
        <KayakDetails />
      </Route>
      <Route path="/products">
        <KayakList kayaks={productStore.kayaks} />
      </Route>
      <Route path="/manufactures/:manufactureSlug">
        <ManufactureDetails />
      </Route>
      <Route path="/manufactures">
        <ManufactureList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
