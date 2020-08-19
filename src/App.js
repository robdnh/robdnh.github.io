import React from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";
import { ViewportProvider } from './ViewportProvider';

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