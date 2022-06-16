import React from "react";
import Item from "../item/Item";
import { Col, Row } from "antd";
import "./Pokemon.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { fetchPokemonsStartAsync, setNextUrl } from "../../redux/items/action";
import { createStructuredSelector } from "reselect";
import { selecIsPokemonFetching, selecPokemonItems, selecNextUrl } from "../../redux/items/selector";


class Pokemon extends React.Component {
  componentDidMount() {
    const { fetchPokemonsStartAsync} = this.props;
    fetchPokemonsStartAsync();
  }
  fetchData(next){  
    //setNextUrl(selecPokemonItems.next);
    console.log("next",next)
    fetchPokemonsStartAsync(next);
  }
  render() {
    const {isPokemonFetching, selecPokemonItems, selecNextUrl} = this.props;
    console.log( selecPokemonItems)

     return (
      <div><div className="menu">
          {!isPokemonFetching && selecPokemonItems? (
            <InfiniteScroll
              dataLength={selecPokemonItems.results.length}
              next={this.fetchData(selecPokemonItems.next)}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <Row gutter={16}>
                {selecPokemonItems.results.map(
                  (PokemonItem, i) => (
                    <Col xs={8} span={4} key={i}>
                      <div
                        style={{
                          background: "#F3F3F3",
                          padding: "8px 0",
                        }}
                      >
                        <Item
                      
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
  selecPokemonItems : selecPokemonItems,
  selecNextUrl : selecNextUrl
});

const mapDispatchToProps = (dispatch) => ({
  fetchPokemonsStartAsync: (next,data) => dispatch(fetchPokemonsStartAsync(next,data)),
  setNextUrl: () => dispatch(setNextUrl(selecPokemonItems.next))
});

export default connect(mapStateToProp, mapDispatchToProps)(Pokemon);
