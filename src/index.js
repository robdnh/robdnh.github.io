import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom";
import { createTheme, Customizations } from '@fluentui/react';

const myTheme = createTheme({
  palette: {
    themePrimary: '#323130',
    themeLighterAlt: '#e7e6e5',
    themeLighter: '#d0cfce',
    themeLight: '#bab8b7',
    themeTertiary: '#a3a2a0',
    themeSecondary: '#8d8b8a',
    themeDarkAlt: '#767573',
    themeDark: '#605e5d',
    themeDarker: '#494847',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  },
  defaultFontStyle: { fontFamily: 'Segoe UI', fontWeight: 'normal', color: '#000000'},
  Text: {
    fontColor: '#000000'
  },
  Icon: {
    fontColor: '#000000'
  },  
  });

function Content(props) {
    Customizations.applySettings({ theme: myTheme });
    return (
        <HashRouter><App /></HashRouter>
    );
}
ReactDOM.render(<Content/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();