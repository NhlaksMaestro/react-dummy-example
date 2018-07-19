import React, { Component } from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import App from './Components/index';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore()

class Conference extends React.Component {
    render() {
        return (

            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <Provider store={store}>
                <App />
              </Provider>
            </MuiThemeProvider>

        );
    }
}

ReactDom.render(<Conference/>,document.getElementById('app'));
//<Provider store={store}>{() => <App /> }</Provider>
