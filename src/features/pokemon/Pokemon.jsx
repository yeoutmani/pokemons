import React from "react";
import Item from "../item/Item";
import { Col, Row } from "antd";
import "./Pokemon.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { fetchPokemonsStartAsync } from "../../redux/items/action";
import { createStructuredSelector } from "reselect";
import { selecIsPokemonFetching, selecPokemonItems } from "../../redux/items/selector";


class Pokemon extends React.Component {
  componentDidMount() {
    const { fetchPokemonsStartAsync} = this.props;
    fetchPokemonsStartAsync();
  }
  render() {
    const {isPokemonFetching, selecPokemonItems,fetchPokemonsStartAsync } = this.props;
    //console.log( selecPokemonItems)

     return (
      <div><div className="menu">
          {!isPokemonFetching && selecPokemonItems? (
            <InfiniteScroll
              dataLength={selecPokemonItems.length}
              next={fetchPokemonsStartAsync}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <Row gutter={16}>
                {selecPokemonItems.map(
                  (PokemonItem, i) => (
                    <Col xs={8} span={4} key={i}>
                      <div
                        style={{
                          background: "#F3F3F3",
                          padding: "8px 0",
                        }}
                      >
                        <Item
                          onclick="console.log('The link was clicked.');"
                      
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

const mapStateToProp = () => createStructuredSelector ({
  isPokemonFetching : selecIsPokemonFetching,
  selecPokemonItems : selecPokemonItems
});

const mapDispatchToProps = (dispatch) => ({
  fetchPokemonsStartAsync: () => dispatch(fetchPokemonsStartAsync()),
});

export default connect(mapStateToProp, mapDispatchToProps)(Pokemon);
