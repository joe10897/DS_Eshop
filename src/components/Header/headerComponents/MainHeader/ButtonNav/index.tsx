import React, { useCallback, useRef, useState } from "react";
import { Link, Router, Route, useHistory, useLocation } from "react-router-dom";

import styles from "./styles.scss";

interface HeaderProps {}

const NavItem: React.FC<HeaderProps> = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [value, setCount] = useState("");
  const isLogin = false;
  function searchGoods() {
    console.log("search: " + value);
  }
  const routeChangeToShoppingCart = useCallback(() => {
    if (isLogin) {
      var path = "/shoppingCart";
      history.push(path);
    } else {
      var path = "/login";
      history.push(path);
    }
  }, []);
  return (
    <div className={`${styles.navItem_container}`}>
      <div className={styles.navItem_container_contain}>
        <div className={styles.icon}></div>
        <div className={styles.searchBar}>
          <input
            type={"text"}
            className={styles.searchBar_input}
            placeholder={"搜索"}
            onChange={(event) => setCount(event.target.value)}
          />
          <div className={styles.searchBar_submitButton} onClick={searchGoods}>
            <div className={styles.searchBar_submitButton_icon}></div>
          </div>
        </div>
        <div className={styles.shoppingCart}>
          <div
            className={styles.shoppingCart_icon}
            onClick={routeChangeToShoppingCart}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NavItem);
