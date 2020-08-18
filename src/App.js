import React from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import { ViewportProvider } from './ViewportProvider';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

const authConfig = {
  signInConfig: {
    isSignUpDisplayed: false
  }
};

function App(props) {


  return(
      <div className="AppContainer">
          <ViewportProvider>
            <Routes/>
          </ViewportProvider>
      </div>
  )
}

export default withRouter(App)