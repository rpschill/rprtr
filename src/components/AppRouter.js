import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Dashboard from '../pages/Dashboard';
import Account from '../pages/Account';
import ContentManager from '../pages/ContentManager';
import EditorialCalendar from '../pages/EditorialCalendar';
import MediaManager from '../pages/MediaManager';
import Analytics from '../pages/Analytics';
import OrgManagement from '../pages/OrgManagement';
import Settings from '../pages/Settings';

const AppRouter = ({ match }) => (
    <Switch>
      <Route path={`${match.url}/account`} component={Account}></Route>
      <Route path={`${match.url}/dashboard`} component={Dashboard}></Route>
      <Route path={`${match.url}/content-manager`} component={ContentManager}></Route>
      <Route path={`${match.url}/calendar`} component={EditorialCalendar}></Route>
      <Route path={`${match.url}/media`} component={MediaManager}></Route>
      <Route path={`${match.url}/analytics`} component={Analytics}></Route>
      <Route path={`${match.url}/organization`} component={OrgManagement}></Route>
      <Route path={`${match.url}/settings`} component={Settings}></Route>
      <Redirect from={`${match.url}`} to={`${match.url}/dashboard`}></Redirect>
    </Switch>
);

export default AppRouter;
