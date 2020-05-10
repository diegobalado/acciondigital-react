import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacto from '../components/pages/Contacto';
import Inicio from '../components/pages/Inicio';
import Faq from '../components/pages/Faq';
import Amigos from '../components/pages/Amigos';

const Routes = () => (
  <Switch>
    <Route path="/amigos">
      <Amigos />
    </Route>
    <Route path="/faq">
      <Faq />
    </Route>
    <Route path="/contacto">
      <Contacto />
    </Route>
    <Route path="/" exact={true}>
      <Inicio />
    </Route>
  </Switch>
);

export default Routes;