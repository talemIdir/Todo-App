import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./containers/Home/Home";
import { connect, useSelector } from "react-redux";
import { SignIn } from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import { isLoaded } from "react-redux-firebase";

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children;
}

const App = ({ uid }) => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthIsLoaded>
        {uid ? (
          <Layout>
            <Switch>
              <Route path="/" component={Home} exact />
              <Redirect to="/" />
            </Switch>
          </Layout>
        ) : (
          <Switch>
            <Route path="/SignIn" component={SignIn} exact />
            <Route path="/SignUp" component={SignUp} exact />
            <Redirect to="/SignIn" />
          </Switch>
        )}
      </AuthIsLoaded>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(App);
