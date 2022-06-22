import React from "react";
import { Layout } from "antd";
import styles from "./Footer.module.css";

const { Footer: FooterEl } = Layout;

const Footer: React.FC = () => (
  <FooterEl className={styles.footer}>
    Ant Design ©2022 Created by OverNovik
  </FooterEl>
);

export default Footer;
