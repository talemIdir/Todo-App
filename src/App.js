import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./containers/Home/Home";
import { connect } from "react-redux";
import { SignIn } from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";

const App = ({ uid, isInit }) => {
  console.log(isInit);
  return (
    <BrowserRouter>
      <ToastContainer />
      {isInit ? (
        console.log("init")
      ) : uid ? (
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
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    isInit: state.firebase.isInitializing,
  };
};

export default connect(mapStateToProps)(App);
