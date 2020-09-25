import React, { useCallback } from "react";
import { Link, Router, Route, useHistory } from "react-router-dom";

import styles from "./styles.scss";

interface HeaderProps {}

const NavItem: React.FC<HeaderProps> = () => {
  const history = useHistory();

  const routeChangeToDashboard = useCallback(() => {
    var path = "/dashboard";
    history.push(path);
  }, []);

  return (
    <div className={`${styles.navItem_container}`}>
      <div className={styles.navItem_container_contain}>
        <div className={styles.icon} onClick={routeChangeToDashboard}></div>
        <div className={styles.title}>登入</div>
      </div>
    </div>
  );
};

export default React.memo(NavItem);
