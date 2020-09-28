import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import MainHeader from "./headerComponents/MainHeader/";
import LoginHeader from "./headerComponents/LoginHeader";
import LoginIndex from "../../containers/Login"
import { NAV_ITEM_LIST } from "./constants";

import styles from "./styles.scss";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const { pathname } = useLocation();

  //const theme = useSelector((appState: any) => appState.AppReducer.theme);

  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={MainHeader} />
        <Route path={"/login"} component={LoginHeader} />
      </Switch>
    </Router>
  );
};

export default Header;
