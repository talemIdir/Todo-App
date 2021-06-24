import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./containers/Home/Home";
import Todos from "./containers/Todos/Todos";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer />
        <Switch>
          <Route path="/" component={Home} exact />
          {props.uid && <Route path="/todos" component={Todos} exact />}
          <Redirect to="/" />
        </Switch>
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
