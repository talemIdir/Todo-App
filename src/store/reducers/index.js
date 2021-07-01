import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./authReducer";
import { projectReducer } from "./projectReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  project: projectReducer,
});

export default rootReducer;
