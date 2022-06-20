import React from "react";
import Item from "../item/Item";
import { Col, Row } from "antd";
import "./Pokemon.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { fetchPokemonsStart } from "../../redux/items/request";
import { createStructuredSelector } from "reselect";
import { selecIsPokemonFetching, selecPokemonItems } from "../../redux/items/selector";


class Pokemon extends React.Component {
  render() {
    const {isPokemonFetching, selecPokemonItems,fetchPokemonsStart } = this.props;
    console.log('selecPokemonItems[0].name',selecPokemonItems[0])
     return (
      <div><div className="menu">
          {!isPokemonFetching ? (
            <InfiniteScroll
              dataLength={selecPokemonItems.length}
              next={fetchPokemonsStart}
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
                        key={i}                     
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
 fetchPokemonsStart: () => dispatch(fetchPokemonsStart()),
});

export default connect(mapStateToProp, mapDispatchToProps)(Pokemon);
