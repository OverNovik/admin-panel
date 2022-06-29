import React from "react";
import { Layout } from "antd";
import styles from "./Footer.module.css";

const AppFooter: React.FC = () => (
  <Layout.Footer className={styles.footer}>
    Ant Design ©2022 Created by OverNovik
  </Layout.Footer>
);

export default AppFooter;
