import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Card, Image } from "antd";
import * as Route from "react-router-dom";
import { Spinner } from "components";
import { operations, Types } from "./duck";
import styles from "./PhotosInfoPage.module.css";

const { Meta } = Card;

const PhotoInfoPage: React.FC = () => {
  const { id = "" } = Route.useParams();
  const navigation = Route.useNavigate();
  const location = Route.useLocation();

  const { data, loading } = useQuery<
    Types.GetPhotoInfoQuery,
    Types.GetPhotoInfoQueryVariables
  >(operations.getPhotoInfo, {
    variables: {
      id,
    },
  });

  if (!data || loading) {
    return <Spinner />;
  }

  if (!loading && !data.photo?.id) {
    return <Route.Navigate to="*" state={{ from: location }} />;
  }

  return (
    <>
      <Button type="primary" onClick={() => navigation(-1)}>
        Back
      </Button>
      <Card
        hoverable
        className={styles.card}
        cover={<Image src={data.photo?.url || ""} />}
      >
        <Meta title={data.photo?.title} className={styles.meta} />
      </Card>
    </>
  );
};

export default PhotoInfoPage;
