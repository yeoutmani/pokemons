import React from "react";
import { Layout, Avatar, Image, Divider, Typography } from "antd";
import "./modalContent.scss";
import {
  selecContentData,
  selecIsContentFetching,
} from "../../redux/content/selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CloseOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Content } = Layout;

const ModalRender = ({ contentData, isContentFetching }) => {
  let url = "",
    name = "",
    effect = "",
    sort_effect = "";
  try {
    name = contentData.name;
    url = contentData.sprites.default;
    if (contentData.effect_entries.lenght !== 0) {
      effect = contentData.effect_entries[0].effect;
      sort_effect = contentData.effect_entries[0].sort_effect;
    } else {
      effect = "No information";
    }
  } catch (error) {
    effect = "No information";
  }
  return (
    <Content>
      {!isContentFetching ? (
        <>
          <div style={{ marginLeft: "97%" }}>
            <CloseOutlined />
          </div>
          <div
            style={{
              textAlign: "center",
            }}>
            <Avatar
              size={150}
              src={
                <Image
                  src={url}
                  style={{
                    marginLeft: "-5%",
                    width: 170,
                  }}
                />
              }
            />
            <h2 style={{ color: "black" }}>{name}</h2>
            <Divider />

            <Text style={{ flexShrink: 1 }}>{effect}</Text>
            <Divider />
            <Text>{sort_effect}</Text>
          </div>
        </>
      ) : (
        "" // Todo: Add loader
      )}
    </Content>
  );
};

const mapStateToProp = () =>
  createStructuredSelector({
    contentData: selecContentData,
    isContentFetching: selecIsContentFetching,
  });

export default connect(mapStateToProp,null)(ModalRender);
