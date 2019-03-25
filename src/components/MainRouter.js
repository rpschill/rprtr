import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ViewWrapper from './ViewWrapper';
import { ImplicitCallback } from '@okta/okta-react';

const MainRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/app" component={ViewWrapper}></Route>
        <Route path="/implicit/callback" component={ImplicitCallback} />
    </Switch>
);

export default MainRouter;
