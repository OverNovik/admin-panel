import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Card, Image } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "app/components";
import { NotFoundPage } from "..";
import { operations, Types } from "./duck";

const { Meta } = Card;

const PhotoInfoPage: React.FC = () => {
  const { id = "" } = useParams();
  const navigation = useNavigate();

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
    return <NotFoundPage />;
  }

  return (
    <>
      <Button type="primary" onClick={() => navigation(-1)}>
        Back
      </Button>
      <Card
        hoverable
        style={{ width: 340 }}
        cover={<Image src={data.photo?.url || ""} />}
      >
        <Meta title={data.photo?.title} />
      </Card>
    </>
  );
};

export default PhotoInfoPage;
