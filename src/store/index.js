import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

import rootReducer from "./reducers";
import firebase from "../Firebase";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const initialState = {};

const store = createStore(rootReducer);

export default store;
