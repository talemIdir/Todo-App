import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./containers/Home/Home";
import Todos from "./containers/Todos/Todos";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/todos" component={Todos} exact />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
