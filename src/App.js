import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./containers/Home/Home";
import Todos from "./containers/Todos/Todos";
import { connect } from "react-redux";
import { SignIn } from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";

const App = (props) => {
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer />
        {props.uid ? (
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/todos" component={Todos} exact />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/SignIn" component={SignIn} exact />
            <Route path="/SignUp" component={SignUp} exact />
            <Redirect to="/SignUp" />
          </Switch>
        )}
      </Layout>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(App);
