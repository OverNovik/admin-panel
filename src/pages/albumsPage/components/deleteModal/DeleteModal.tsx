import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Modal } from "antd";
import { operations, Types } from "./duck";

const DeleteModal: React.FC<Types.DeleteModalProps> = ({ id }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [deleteModal, { loading }] = useMutation<
    Types.DeleteAlbumMutation,
    Types.DeleteAlbumMutationVariables
  >(operations.deleteAlbum);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    deleteModal({ variables: { id } });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button size="small" type="link" onClick={showModal}>
        Delete
      </Button>
      <Modal
        centered
        title="Delete album"
        confirmLoading={loading}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Do you want to delete this album?
      </Modal>
    </>
  );
};

export default DeleteModal;
