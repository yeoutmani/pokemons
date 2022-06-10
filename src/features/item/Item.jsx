import React, { useState } from "react";
import { Modal, Avatar, Image } from "antd";

import "./Item.scss";

import modalRender from "../modalContent/modalContent";

const Item = ({ title, url, size }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className={`${size} item`} onClick={showModal}>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
        </div>
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
        content="content"
        modalRender={modalRender}
        width={1000}
      />
    </>
  );
};

export default Item;
