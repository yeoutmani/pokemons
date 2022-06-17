import React from "react";
import { Layout, Avatar, Image } from "antd";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selecIsContentFetching } from "../../redux/content/selector";
import { fetchContentStartAsync } from "../../redux/content/action";

import "./modalContent.scss";


const { Content } = Layout;

const ModalRender = ({isContentFetching, fetchContentStartAsync}) => {
 /* fetchContentStartAsync();
  console.*/
  let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png"
  return (
    <Content>
      {!url ? (
    <div
      style={{
        backgroundColor: "#F7DC6F",
        width: "1000px",
        textAlign: "center",
      }}
    >
      <Avatar
        size={150}
        src={
          <Image
            src={url}
            style={{
              marginLeft: "-8%",
              width: 185,
            }}
          />
        }
      />
      <h2 style={{ color: "black" }}>Name</h2>
    </div>
     ) : (
      ""
    )}
  </Content>
  
  );
};

const mapStateToProp = () => createStructuredSelector ({
  isContentFetching : selecIsContentFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchContentStartAsync: () => dispatch(fetchContentStartAsync()),

});

export default connect(mapStateToProp, mapDispatchToProps)(ModalRender);
