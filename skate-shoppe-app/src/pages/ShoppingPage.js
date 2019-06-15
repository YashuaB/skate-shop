import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/shoppingActions";


class ShoppingPage extends Component {
  //Adds the clicked item to the shopping cart.
  handleClick = id => {
    this.props.addItem(id);
  };

  render() {
    // Renders items on the page in cards.
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light grey"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">Add</i>
            </span>
          </div>
          <div className="card-content">
            <p>{item.description}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });
// Item list displeyed here.
    return (
      <div className="container">
        <h3 className="center">SHOP</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}

// We are exporting the combination of a component that is connected to the store. Any changes to the state will be reflected in the component because it is “connected” to mapStateToProps and that information is now made available to the component through a prop.
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

// This function directs the dispatching of an action by pointing it to an action creator addItem.
const mapDispatchToProps = dispatch => {
  return {
    addItem: id => {
      dispatch(addItem(id));
    }
  };
};

// Connect to store.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingPage);
