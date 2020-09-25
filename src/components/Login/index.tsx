import React, { useEffect, useState } from "react";
import styles from "./styles.scss";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <div className={styles.login_button}>
            <img src="" />
            Sign in with google
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
