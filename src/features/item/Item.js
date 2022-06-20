import React from "react";
import { Modal } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ModalRender from "../modalContent/modalContent";
import { selecIsModalVisible, selecContentVar } from "../../redux/content/selector";
import { setModaleVisible, setContentVar } from "../../redux/content/action";
import { fetchContentStart } from "../../redux/content/request";

import "./Item.scss";

const Item = ({ isModalVisible, setModaleVisible,setContentVar,title, url, size, fetchContentStart, selecContentVar }) => {
 

  const showModal = () => {
    setModaleVisible(true);
    const modalContent = {
      title : title,
      url : url
    }
    setContentVar(modalContent);
    fetchContentStart();
  };
  const handleOk = () => {
    setModaleVisible(false);
  };

  const handleCancel = () => {
    setModaleVisible(false);
  };
  const  getTable= () =>  {
    return (
      <ModalRender />
    );
}
  return (
    <>
      <div className={`${size} item`} onClick={showModal}>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
        </div>
      </div>
      {selecContentVar.title === title ? (
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
        content="content"
        modalRender={getTable}
        width={1000}
      />

      ) : ("")}
      
    </>
  );
};

const mapStateToProp = () => createStructuredSelector ({
  isModalVisible : selecIsModalVisible,
  selecContentVar : selecContentVar,
});

const mapDispatchToProps = (dispatch) => ({
  setModaleVisible: isModalVisible => dispatch(setModaleVisible(isModalVisible)),
  setContentVar: contentVar => dispatch(setContentVar(contentVar)),
  fetchContentStart: () => dispatch(fetchContentStart()),

});

export default connect(mapStateToProp, mapDispatchToProps)(Item);
