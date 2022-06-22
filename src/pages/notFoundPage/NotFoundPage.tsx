import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils";

const NotFoundPage: React.FC = () => {
  const auth: any = useAuth();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          {auth.loggedIn ? (
            <Link to="/albums">Back Home</Link>
          ) : (
            <Link to="/login">Back Home</Link>
          )}
        </Button>
      }
    />
  );
};

export default NotFoundPage;
