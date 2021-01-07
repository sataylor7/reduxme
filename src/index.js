import React, {Component} from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import {
    updateScreenResize,
    screenResize
  } from "hmk/packages/hmk-state/lib/hmk-state";
import Store, { history } from "./configureStore";

import "./index.css";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "hmk/packages/hmk-ui/lib/hmk-ui-components";
import theme from "hmk/packages/hmk-ui/lib/hmk-ui-theme";


class Application extends Component {
    componentDidMount() {
      // setup the local dev cookie
      // deprecated
      //setupAppTokenDev();
      Store.dispatch(updateScreenResize("desktop"));
    }
  
    render() {
      return (
        <Provider store={Store}>
          <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
              <App/>
            </ConnectedRouter>
          </ThemeProvider>
        </Provider>
      );
    }
  }
  screenResize(Store);

render(<Application />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
