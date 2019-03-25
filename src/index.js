import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './components/ScrollToTop';

// ReactDOM.render(<App />, document.getElementById('root'));

const oktaConfig = {
    issuer: 'https://dev-265334.okta.com/oauth2/default',
    redirect_uri: `${window.location.origin}/implicit/callback`,
    client_id: process.env.REACT_APP_OKTA_CLIENT_ID,
};

ReactDOM.render(
    <BrowserRouter>
        <Security
            issuer='https://dev-265334.okta.com/oauth2/default'
            redirect_uri='http://localhost:3000/implicit/callback'
            client_id='0oacrrqq3Y07GUCSa356'
        >
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Security>
    </BrowserRouter>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) module.hot.accept();
