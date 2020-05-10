import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacto from '../components/Contacto';
import Inicio from '../components/Inicio';
import Faq from '../components/Faq';
import Amigos from '../components/Amigos';

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