import React from "react";
import Item from "../item/Item";
import { Col, Row } from "antd";
import "./Pokemon.css";
import { fetchPokemon } from "../../services/pokemonAPI";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { setPokemonItem } from "../../redux/items/action";
import { setNextUrl } from "../../redux/items/next-url";

class Pokemon extends React.Component {
  componentDidMount() {
    this.fetchData();
  }
  async fetchData() {
    const response = await fetchPokemon(this.props.nextUrl);
    console.log("response", response);
    let next = response.next;
    if (this.props.PokemonItems.response === undefined) {
      this.props.setPokemonItem({ response });
    } else {
      let items = this.props.PokemonItems.response.results.concat(
        response.results
      );
      this.props.setPokemonItem({ items });
    }
    this.props.setPokemonItem({ response });
    this.props.setNextUrl({ next });
  }
  render() {
    return (
      <div>
        <div className="menu">
          {this.props.PokemonItems.length !== 0 ? (
            <InfiniteScroll
              dataLength={this.props.PokemonItems.response.results.length}
              next={this.fetchData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <Row gutter={16}>
                {this.props.PokemonItems.response.results.map(
                  (PokemonItem, i) => (
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
                  )
                )}
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

const mapStateToProp = (state) => ({
  PokemonItems: state.PokemonReducer.PokemonItems,
  next: state.PokemonReducer.next,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemonItem: (PokemonItem) => dispatch(setPokemonItem(PokemonItem)),
  setNextUrl: (nextUrl) => dispatch(setNextUrl(nextUrl)),
});

export default connect(mapStateToProp, mapDispatchToProps)(Pokemon);
