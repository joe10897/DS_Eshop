import React from "react";

import styles from "./styles.scss";

import Header from "../../components/Header/headerComponents/MainHeader";
interface DashboardProps { }

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.top_Padding}></div>
      <div>Dashboard</div>
    </div>
  );
};

export default Dashboard;
