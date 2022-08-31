import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
import {API_ENDPOINT} from '../src/context/context'
//dev-jadft8v0.us.auth0.com
// F3jAt9qYvccLfuo2wlKJR7qZXZVPcEkh
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-jadft8v0.us.auth0.com"
    // clientId="BHmZpARo3Bd6yY9ITgUvACUNEDrzYiJo"
    clientId="F3jAt9qYvccLfuo2wlKJR7qZXZVPcEkh"

    redirectUri={window.location.origin}
    >
    <GithubProvider>
    <App />
    </GithubProvider>
    </Auth0Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
