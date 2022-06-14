import React from "react";
import { Spin } from "antd";
import styles from "./style.module.css";

const Spinner: React.FC = () => (
  <div className={styles.spinner}>
    <Spin tip="Loading..." />
  </div>
);

export default Spinner;
