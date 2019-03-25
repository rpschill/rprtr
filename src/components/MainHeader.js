import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import { NavLink } from '@okta/okta-react';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import { withAuth } from '@okta/okta-react';
import LoginButton from './LoginButton';
import { checkAuthentication } from '../helpers';

const styles = theme => ({
  flex: {
    flex: 1,
  },
  navLink: {
    color: '#fff'
  }
});

const MainHeader = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          RPRTR
        </Typography>
        <div className={classes.flex} />
        <Typography variant="h6" color="inherit">
          <Button component={NavLink} href="/app" className={classes.navLink}>Dashboard</Button>
        </Typography>
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(MainHeader);
