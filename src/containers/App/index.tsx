import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import WithAuth from "../../hoc/WithAuth";
import Login from "../../components/Login";
import Header from "../../components/Header";
import Dashboard from "../Dashboard";

import PATH from "../../utils/pathConst";
import styles from "./styles.scss";

function App() {
  const theme = useSelector((appState: any) => appState.AppReducer.theme);
  return (
    <div className={styles.app} data-theme={theme} id="scroll_container">
      <Router>
        <Switch>
          <WithAuth>
            <Header />
            <Route path={PATH.DASHBOARD} component={Dashboard} />
            <Route path={PATH.LOGIN} component={Login} />
          </WithAuth>
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);
