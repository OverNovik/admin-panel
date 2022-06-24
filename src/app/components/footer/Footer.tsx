import React from "react";
import { Layout } from "antd";
import styles from "./Footer.module.css";

const { Footer: UIFooter } = Layout;

const Footer: React.FC = () => (
  <UIFooter className={styles.footer}>
    Ant Design ©2022 Created by OverNovik
  </UIFooter>
);

export default Footer;
