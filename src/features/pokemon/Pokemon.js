/** @format */

import React from "react";
import Item from "../item/Item";
import { Col, Row } from "antd";
import "./Pokemon.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selecIsPokemonFetching,
  selecNextUrl,
  selecPokemonItems,
} from "../../redux/items/selector";
import {
  fetchPokemonsStart,
  fetchLoadMorePokemonsStart,
} from "../../redux/items/action";
class Pokemon extends React.Component {
  componentDidMount() {
    const { fetchPokemon } = this.props;
    fetchPokemon();
  }

  render() {
    const {
      isPokemonFetching,
      selecPokemonItems,
      loadMorePokemon,
      selecNextUrl,
    } = this.props;
    return (
      <div>
        <div className='menu'>
          {!isPokemonFetching ? (
            <InfiniteScroll
              dataLength={selecPokemonItems.length}
              next={loadMorePokemon}
              hasMore={selecNextUrl !== null}
              loader={<h4>Loading...</h4>}>
              <Row gutter={16}>
                {selecPokemonItems.map((PokemonItem, i) => (
                  <Col xs={8} span={4} key={i}>
                    <div
                      style={{
                        background: "#F3F3F3",
                        padding: "8px 0",
                      }}>
                      <Item
                        key={i}
                        title={PokemonItem.name}
                        url={PokemonItem.url}
                        size='1'
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

const mapStateToProp = () =>
  createStructuredSelector({
    isPokemonFetching: selecIsPokemonFetching,
    selecPokemonItems: selecPokemonItems,
    selecNextUrl: selecNextUrl,
  });
const mapDispatchToProps = (dispatch) => ({
  fetchPokemon: () => dispatch(fetchPokemonsStart()),
  loadMorePokemon: () => dispatch(fetchLoadMorePokemonsStart()),
});
export default connect(mapStateToProp, mapDispatchToProps)(Pokemon);
