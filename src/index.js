import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";
import { Provider } from "react-redux";
import store from "./store";
import firebase from "./Firebase";

const rrfConfig = { userProfile: "users" }; // react-redux-firebase config

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <>
              <App />
              <GlobalStyles />
            </>
          </ThemeProvider>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
