import React from "react";

import styles from "./styles.scss";

import Header from "../../components/Header/headerComponents/LoginHeader";
interface LoginProps { }

const Login = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.top_Padding}></div>
      <div>Login</div>
    </div>
  );
};

export default Login;
