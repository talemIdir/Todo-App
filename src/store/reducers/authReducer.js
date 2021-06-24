import { toast } from "react-toastify";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast("Signed in");
      return state;
    case "SIGN_IN_ERR":
      toast.error("Sign in Error");
      return state;
    case "SIGN_OUT":
      toast.error("Sign out");
      return state;
    case "SIGN_OUT_ERR":
      toast.error("Sign out Error");
      return state;
    default:
      return state;
  }
};

export default authReducer;
