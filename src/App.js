import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import { ImplicitCallback, SecureRoute } from '@okta/okta-react';
import MainHeader from "./components/MainHeader";
import { withStyles } from "@material-ui/core";
import Home from './pages/Home';
import ViewWrapper from './components/ViewWrapper';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    }
  }
});

const App = ({ classes }) => {
  return (
    <div className="App">
      <CssBaseline />
      <MainHeader />
      <main className={classes.main}>
        <Switch>
          <Route exact={true} path="/" component={Home}></Route>
          <Route exact={true} path="/implicit/callback" component={ImplicitCallback} />
          <SecureRoute path="/app" component={ViewWrapper} />
        </Switch>
      </main>
    </div>
  );
}

export default withStyles(styles)(App);
