import React, { Component } from 'react';
import {
    Button,
    IconButton,
    Menu,
    MenuItem,
    ListItemText,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { withAuth } from '@okta/okta-react';
import { checkAuthentication } from '../helpers';

export default withAuth(class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: null,
            userinfo: null,
            menuAnchorEl: null,
        };
        this.checkAuthentication = checkAuthentication.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    async login() {
        // Redirect to 'dashboard' after login
        this.props.auth.login('/app');
    }

    async logout() {
        this.handleMenuClose();
        this.props.auth.logout('/');
    }

    handleMenuOpen = event => this.setState({ menuAnchorEl: event.currentTarget });
    handleMenuClose = () => this.setState({ menuAnchorEl: null });

    render() {
        const { userinfo, menuAnchorEl } = this.state;

        const menuPosition = {
            vertical: 'top',
            horizontal: 'right',
        };

        if (this.state.authenticated === null) return null;

        if (!this.state.authenticated) {
            return <Button color="inherit" onClick={this.login}>Log In</Button>;
        }

        return (
            <div>
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
            </div>
        );
    }
});
