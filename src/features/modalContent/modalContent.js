import React from "react";
import { Layout, Avatar, Image, Divider, Typography } from "antd";
import "./modalContent.scss";
import store from '../../redux/store';
import { selecContentData } from "../../redux/content/selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const { Text } = Typography;
const { Content } = Layout;

const ModalRender = ({contentData}) => {
  let url ='',name ='', effect= '' ,sort_effect = '';
  try {
      name = contentData.name
      url = contentData.sprites.default;
      if (contentData.effect_entries.lenght !== 0){
      effect = contentData.effect_entries[0].effect;
      sort_effect = contentData.effect_entries[0].sort_effect;
    }else{
        effect = 'No information';
      }
  } catch (error) { 
    effect = "No information"; }
  return (
    <Content>
    <div
          style={{
            textAlign: "center",
          }}
        >
          <Avatar
            size={150}
            src={<Image
              src={url}
              style={{
                marginLeft: "-5%",
                width: 170,
              }} />} />
          <h2 style={{ color: "black" }}>{name}</h2>
           <Divider />

          <Text style={{ flexShrink: 1}}>
          {effect}
          </Text>
            <Divider />
            <Text>
            {sort_effect}

            </Text>
        </div>
  </Content>
  
  );
};

const mapStateToProp = () => createStructuredSelector ({
  contentData : selecContentData
});

export default connect(mapStateToProp,null)(ModalRender);
