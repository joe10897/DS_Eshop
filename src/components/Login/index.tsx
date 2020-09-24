import React, { useEffect, useState } from "react";

import styles from "./styles.scss";

import userApi from "Utils/api/userAPI";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const weqwe = 123;
  return <div>{weqwe}</div>;
  userApi.login({ username: "asdas", password: "asdasd" });
};

export default Login;
