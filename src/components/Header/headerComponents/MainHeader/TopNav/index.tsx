import React, { useCallback } from "react";
import { Link, Router, Route, useHistory } from "react-router-dom";

import styles from "./styles.scss";

interface HeaderProps { }

const NavItem: React.FC<HeaderProps> = () => {
  const isLogin = false;
  const history = useHistory();
  const routeChangeToSeller = useCallback(() => {
    var path = "/seller";
    history.push(path);
  }, []);
  const routeChangeToUserPage = useCallback(() => {
    var path = "/userpage";
    history.push(path);
  }, []);
  const routeChangeToSignUp = useCallback(() => {
    var path = "/signup";
    history.push(path);
  }, []);
  const routeChangeToLogin = useCallback(() => {
    var path = "/login";
    history.push(path);
  }, []);
  const checkIsLogin = (isLogin) => {
    if (isLogin === true) {
      return (
        <div className={styles.signinLogin}>
          <div className={styles.title} onClick={routeChangeToUserPage}>
            username
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.signinLogin}>
          <div className={styles.title} onClick={routeChangeToSignUp}>
            註冊
          </div>
          <div className={styles.title} onClick={routeChangeToLogin}>
            登入
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.navItem_container}>
      <div className={styles.navItem_container_contain}>
        <div className={styles.title} onClick={routeChangeToSeller}>
          賣家中心
        </div>
        {checkIsLogin(isLogin)}
      </div>
    </div>
  );
};

export default React.memo(NavItem);
