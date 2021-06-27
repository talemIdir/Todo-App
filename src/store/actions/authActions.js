export const signUp = (credentials) => {
  console.log("In sign up action");
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: "SIGN_UP_START" });
    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((userCredential) => {
        console.log(userCredential);
        dispatch({ type: "SIGN_UP" });
      })
      .catch((error) => {
        console.log("here");
        dispatch({ type: "SIGN_UP_ERR", payload: { error: error } });
      });
    console.log("hereere");
  };
};

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "SIGN_IN" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_IN_ERR" }, err);
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_OUT_ERR" }, err);
      });
  };
};
