import React from "react";
import { Modal } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import modalRender from "../modalContent/modalContent";
import { selecIsModalVisible } from "../../redux/content/selector";
import { setModaleVisible, setContentVar, fetchContentStartAsync } from "../../redux/content/action";
import "./Item.scss";

const Item = ({ isModalVisible, setModaleVisible,setContentVar,title, url, size, fetchContentStartAsync }) => {
  const showModal = () => {
    setModaleVisible(true);
    const modalContent = {
      title : title,
      url : url
    }
    setContentVar(modalContent);
    fetchContentStartAsync();
  };
  const handleOk = () => {
    setModaleVisible(false);
  };

  const handleCancel = () => {
    setModaleVisible(false);
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

const mapStateToProp = () => createStructuredSelector ({
  isModalVisible : selecIsModalVisible,
});

const mapDispatchToProps = (dispatch) => ({
  setModaleVisible: isModalVisible => dispatch(setModaleVisible(isModalVisible)),
  setContentVar: contentVar => dispatch(setContentVar(contentVar)),
  fetchContentStartAsync: () => dispatch(fetchContentStartAsync()),

});

export default connect(mapStateToProp, mapDispatchToProps)(Item);
