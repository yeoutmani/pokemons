import React from "react";
import Item from "../item/Item";
import { Col, Row } from "antd";

import "./Pokemon.css";
import { fetchPokemon } from "../../services/pokemonAPI";
import InfiniteScroll from "react-infinite-scroll-component";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);

    this.state = {
      PokemonItems: [],
      next: null,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  async fetchData() {
    const response = await fetchPokemon(this.state.next);
    let items = this.state.PokemonItems.concat(response.results);
    this.setState({ PokemonItems: items });
    this.setState({ next: response.next });
  }
  render() {
    return (
      <div>
        <div className="menu">
          {this.state.PokemonItems.length !== 0 ? (
            <InfiniteScroll
              dataLength={this.state.PokemonItems.length}
              next={this.fetchData}
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
                        url={PokemonItem.url}
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
