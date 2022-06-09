import React from "react";
import Item from "../item/Item";
import { Col, Row } from "antd";

import "./Pokemon.css";
import { fetchPokemon } from "../../services/pokemonAPI";
import InfiniteScroll from "react-infinite-scroll-component";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.fetchMoreData = this.fetchMoreData.bind(this);

    this.state = {
      PokemonItems: [],
      next: "",
      loadItems: false,
    };
  }
  async componentDidMount() {
    const response = await fetchPokemon();
    console.log("response", response);
    this.setState({ PokemonItems: response.results });
    this.setState({ next: response.next });

    console.log("this.state.PokemonItems", this.state.PokemonItems);
  }
  async fetchMoreData() {
    const response = await fetchPokemon();
    let items = this.state.PokemonItems.concat(response.results);
    this.setState({ PokemonItems: items });
  }
  render() {
    return (
      <div>
        <div className="menu">
          {this.state.PokemonItems.length !== 0 ? (
            <InfiniteScroll
              dataLength={this.state.PokemonItems.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <Row gutter={16}>
                {this.state.PokemonItems.map((PokemonItem, i) => (
                  <Col xs={8} span={4}>
                    <div
                      style={{
                        background: "#F3F3F3",
                        padding: "8px 0",
                      }}
                    >
                      <Item
                        key={PokemonItem.name}
                        title={PokemonItem.name}
                        imageUrl={PokemonItem.name}
                        size="1"
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </InfiniteScroll>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Pokemon;
