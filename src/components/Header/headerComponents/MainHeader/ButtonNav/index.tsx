import React, { useCallback, useRef, useState } from "react";
import { Link, Router, Route, useHistory } from "react-router-dom";

import styles from "./styles.scss";

interface HeaderProps {}

const NavItem: React.FC<HeaderProps> = () => {
  const [value, setCount] = useState("");
  function searchGoods() {
    console.log("search: " + value);
  }

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
      </div>
    </div>
  );
};

export default React.memo(NavItem);
