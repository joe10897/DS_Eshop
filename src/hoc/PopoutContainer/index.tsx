import React from "react";

import styles from "./styles.scss";

const PopoutCotainer = ({ children }) => {
  return <div className={styles.container}> {children}</div>;
};

export default PopoutCotainer;
