import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EditIcon from "@material-ui/icons/Edit";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import DomainIcon from "@material-ui/icons/Domain";
import SettingsIcon from "@material-ui/icons/Settings";
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Account from '../pages/Account';
import ContentManager from '../pages/ContentManager';
import EditorialCalendar from '../pages/EditorialCalendar';
import MediaManager from '../pages/MediaManager';
import Analytics from '../pages/Analytics';
import OrgManagement from '../pages/OrgManagement';
import Settings from '../pages/Settings';

const sidebarWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: sidebarWidth,
    width: `calc(100% - ${sidebarWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawer: {
    width: sidebarWidth,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: sidebarWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  toolbar: {
    paddingRight: 24 // keep right padding when sidebar closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  active: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }
});

class ViewWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      menuAnchorEl: null
    };
  }

  handleSidebarOpen = () => {
    this.setState({ open: true });
  };

  handleSidebarClosed = () => {
    this.setState({ open: false });
  };

  handleMenuOpen = event => this.setState({ menuAnchorEl: event.currentTarget });
  handleMenuClose = () => this.setState({ menuAnchorEl: null });

  render() {
    const { classes, match, menuAnchorEl, userinfo } = this.props;

    const menuPosition = {
      vertical: 'top',
      horizontal: 'right',
    };

    return (
      <div className={classes.root}>

        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar
            disableGutters={!this.state.open}
            className={classes.toolbar}
          >
            <IconButton
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open
              })}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.title}>
              <Button size="large" component={NavLink} to="/" color="inherit">
                Rprtr
              </Button>
            </Typography>
            <IconButton onClick={this.handleMenuOpen} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              anchorOrigin={menuPosition}
              transformOrigin={menuPosition}
              open={!!menuAnchorEl}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={this.logout}>
                <ListItemText
                  primary="Logout"
                  secondary={userinfo && userinfo.name}
                />
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open
            })
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleSidebarClosed}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button component={NavLink} to="/app/dashboard" activeClassName={classes.active}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
            <ListItem button component={NavLink} to="/app/content-manager" activeClassName={classes.active}>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary={"Content Manager"} />
            </ListItem>
            <ListItem button component={NavLink} to="/app/calendar" activeClassName={classes.active}>
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary={"Editorial Calendar"} />
            </ListItem>
            <ListItem button component={NavLink} to="/app/media" activeClassName={classes.active}>
              <ListItemIcon>
                <PermMediaIcon />
              </ListItemIcon>
              <ListItemText primary={"Media Manager"} />
            </ListItem>
            <ListItem button component={NavLink} to="/app/analytics" activeClassName={classes.active}>
              <ListItemIcon>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary={"Analytics"} />
            </ListItem>
            <Divider />
            <ListItem button component={NavLink} to="/app/organization" activeClassName={classes.active}>
              <ListItemIcon>
                <DomainIcon />
              </ListItemIcon>
              <ListItemText primary={"Org Management"} />
            </ListItem>
            <ListItem button component={NavLink} to="/app/settings" activeClassName={classes.active}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Settings"} />
            </ListItem>
          </List>
          <Divider />
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
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
        </main>
      </div>
    );
  }
}

ViewWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ViewWrapper);
