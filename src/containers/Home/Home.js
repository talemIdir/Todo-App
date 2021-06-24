import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../store/actions/authActions";

const Home = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    props.signIn();
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    console.log("Sign Out");
    props.signOut();
  };

  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        Sign in
      </button>
      <button type="submit" onClick={handleSignOut}>
        Sign iout
      </button>
      {props.uid && <div>{props.uid}</div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () =>
      dispatch(signIn({ email: "idir.talem@gmail.com", password: "123456" })),
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
