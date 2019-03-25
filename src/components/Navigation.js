import React from "react";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
      }),
  },
  hide: {
      display: 'none',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
  },
});

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        this.setState({ open: true });
        this.props.updateSidebar(e.target.value);

    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="fixed" className={classNames(classes.appBar, {[classes.appBarShift]: this.props.open,})}>
                <Toolbar disableGutters={!this.props.open}>
                  <IconButton
                    className={classNames(classes.menuButton, {[classes.hide]: this.state.open})}
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                    <Button size="large" component={NavLink} to="/" color="inherit">
                      Rprtr
                    </Button>
                  </Typography>
                  <Button component={NavLink} to="/login" color="inherit">
                    Login
                  </Button>
                  <IconButton component={NavLink} to="/account" color="inherit">
                    <AccountCircle />
                  </IconButton>
                </Toolbar>
              </AppBar>
          );
    }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
