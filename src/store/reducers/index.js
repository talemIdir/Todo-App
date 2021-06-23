import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
});
