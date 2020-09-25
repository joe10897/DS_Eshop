import React from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import MainHeader from "./headerComponents/MainHeader/";
import LoginHeader from "./headerComponents/LoginHeader";
import { NAV_ITEM_LIST } from "./constants";

import styles from "./styles.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { pathname } = useLocation();

  //const theme = useSelector((appState: any) => appState.AppReducer.theme);

  return (
    <Router>
      <Switch>
        <Route path={"/dashboard"} component={MainHeader} />
        <Route path={"/login"} component={LoginHeader} />
      </Switch>
    </Router>
  );
};

export default Header;
