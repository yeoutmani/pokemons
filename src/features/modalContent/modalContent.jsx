import React from "react";
import { Layout } from "antd";
import "./modalContent.scss";
const { Content } = Layout;

const ModalRender = () => {
  return (
    <Content>
      <div
        style={{
          backgroundColor: "#F7DC6F",
          width: "1000px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "black" }}>Name</h2>
      </div>
    </Content>
  );
};

export default ModalRender;
