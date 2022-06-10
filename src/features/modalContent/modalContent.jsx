import React, { useState, useEffect } from "react";
import { Layout, Avatar, Image } from "antd";
import "./modalContent.scss";
import { fetchPokemonInfo } from "../../services/pokemonAPI";
const { Content } = Layout;

const ModalRender = (url) => {
  //const [PokemonItems, setPokemonItems] = useState({ next: "10" });
  console.log("ModalRender");

  useEffect(() => {
    console.log("useEffect", url);
    async function fetchData() {
      // You can await here
      const response = await fetchPokemonInfo(url);
      console.log("response", response);
      //console.log(response)
      /* setPokemonItems(response);
      console.log(PokemonItems);*/
      // ...
    }
    fetchData();
  }, []);

  return (
    <Content>
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
    </Content>
  );
};

export default ModalRender;
