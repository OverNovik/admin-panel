import React from "react";
import { Layout, Typography } from "antd";
import styles from "./style.module.css";

const { Header: HeaderEl } = Layout;
const { Title } = Typography;

const Header: React.FC = () => (
  <HeaderEl className={styles.header}>
    <Title level={2} className={styles.title}>
      Admin-panel
    </Title>
  </HeaderEl>
);

export default Header;
