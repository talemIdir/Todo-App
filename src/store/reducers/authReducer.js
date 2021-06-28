import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN_START":
      return { ...state, loading: true };
    case "SIGN_IN":
      toast("Signed in", {
        autoClose: 3000,
        draggable: false,
        progress: undefined,
      });
      return { ...state, loading: false };
    case "SIGN_IN_ERR":
      toast.error("" + action.payload.error, {
        autoClose: 3000,
        draggable: false,
        progress: undefined,
      });
      return { ...state, loading: false };
    case "SIGN_OUT_START":
      return { ...state, loading: true };
    case "SIGN_OUT":
      toast("Sign out");
      return { ...state, loading: false };
    case "SIGN_OUT_ERR":
      toast.error("Sign out Error, please re-try");
      return { ...state, loading: false };
    case "SIGN_UP_START":
      return { ...state, loading: true };
    case "SIGN_UP":
      toast.success("Signed up successfully");
      return { ...state, loading: false };
    case "SIGN_UP_ERR":
      toast.error("" + action.payload.error);
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default authReducer;
