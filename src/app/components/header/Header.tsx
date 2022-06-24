import React, { useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Typography } from "antd";
import { useAuth } from "hooks";
import { DateInput } from "../../../components";
import styles from "./Header.module.css";

const { Header: UIHeader } = Layout;
const { Title } = Typography;

const Header: React.FC = () => {
  const auth = useAuth();
  const [isVisible, setVisible] = useState(false);

  return (
    <UIHeader className={styles.header}>
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
    </UIHeader>
  );
};

export default Header;
