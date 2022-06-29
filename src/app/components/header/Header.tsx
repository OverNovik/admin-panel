import React, { useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Typography } from "antd";
import { DateInput } from "components";
import { useAuth } from "hooks";
import styles from "./Header.module.css";

const { Title } = Typography;

const AppHeader: React.FC = () => {
  const auth = useAuth();
  const [isVisible, setVisible] = useState(false);

  return (
    <Layout.Header className={styles.header}>
      <Title level={2} className={styles.title}>
        Admin-panel
      </Title>
      {auth.loggedIn ? (
        <>
          <Dropdown
            placement="bottom"
            visible={isVisible}
            arrow
            overlay={<DateInput />}
          >
            <Button type="primary" onClick={() => setVisible(!isVisible)}>
              <CalendarOutlined />
            </Button>
          </Dropdown>
          <Button danger className={styles.logout} onClick={auth.logOut}>
            LogOut
          </Button>
        </>
      ) : null}
    </Layout.Header>
  );
};

export default AppHeader;
