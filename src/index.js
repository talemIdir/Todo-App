import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";
import { Provider } from "react-redux";
import store from "./store";
import firebase from "./Firebase";

const rrfConfig = { userProfile: "users", useFirestoreForProfile: true }; // react-redux-firebase config

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ChakraProvider>
          <ThemeProvider theme={theme}>
            <>
              <App />
              <GlobalStyles />
            </>
          </ThemeProvider>
        </ChakraProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
