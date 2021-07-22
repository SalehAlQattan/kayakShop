// router
import { Route, Switch } from 'react-router';
// components
import Home from './Home';
import KayakList from './KayakList';
import KayakDetails from './KayakDetails';
// mobx
import { observer } from 'mobx-react';

const Routes = () => {
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
