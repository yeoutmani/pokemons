import React from "react";
import { Layout, Avatar, Image, Divider } from "antd";

import "./modalContent.scss";
import store from '../../redux/store'


const { Content } = Layout;

const ModalRender = () => {
  let url ='',name ='', effect= '' ,sort_effect = '';

  let contentData = store.getState().ContentReducer.contentData
  if (contentData !== null){
  name = contentData.name
  url = contentData.sprites.default;
  effect = contentData.effect_entries[0].effect
  sort_effect = contentData.effect_entries[0].sort_effect

}
  return (
    <Content>
      {url ? (
    <><div
          style={{
            backgroundColor: "#F7DC6F",
            width: "1000px",
            textAlign: "center",
          }}
        >
          <Avatar
            size={150}
            src={<Image
              src={url}
              style={{
                marginLeft: "-8%",
                width: 185,
              }} />} />
          <h2 style={{ color: "black" }}>{name}</h2>
          <p>
              {effect}
            </p>
            <Divider />
            <p>
            {sort_effect}

            </p>
        </div>
            </>
     ) : (
      ""
    )}
  </Content>
  
  );
};

export default ModalRender;
