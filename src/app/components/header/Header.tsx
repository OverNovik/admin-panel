import React from "react";
import { Button, Layout, Typography } from "antd";
import { useAuth } from "app/utils";
import styles from "./style.module.css";

const { Header: HeaderEl } = Layout;
const { Title } = Typography;

const Header: React.FC = () => {
  const auth: any = useAuth();

  return (
    <HeaderEl className={styles.header}>
      <Title level={2} className={styles.title}>
        Admin-panel
      </Title>
      {auth.loggedIn ? (
        <Button danger className={styles.logout} onClick={auth.logOut}>
          LogOut
        </Button>
      ) : null}
    </HeaderEl>
  );
};

export default Header;
