import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/shoppingActions";


class ShoppingPage extends Component {
  //Adds the clicked item to the shopping cart.


  state = {
    inventory:[]
  }

  componentDidMount(){


    fetch("/all-inventory/:singleItem")
    .then(results => {
      return results.json()
    }).then(data => {
      let inventory = data.results.map((item) =>{
        return(
          <div key={item.results}>
           <img src={item.image}/>
          </div>
        )
      })
      this.setState({inventory:inventory})
      console.log("state", this.state.inventory)
    })
  }

  handleClick = id => {
    this.props.addItem(id);
  };

  render() {
    // Renders items on the page in cards.
    // let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={this.state.item.id}>
          <div className="card-image">
            <img src={this.state.item.image} alt={this.state.itemName} />
            <span className="card-title">{this.state.itemName}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light grey"
              onClick={() => {
                this.handleClick(this.state.item.id);
              }}
            >
              <i className="material-icons">Add</i>
            </span>
          </div>
          <div className="card-content">
            <p>{this.state.itemName}</p>
            <p>
              <b>Price: {this.state.item.price}$</b>
            </p>
          </div>
        </div>
      );
    // });
// Item list displayed here.

    // return (
    //   <div className="container">
    //     <h3 className="center">SHOP</h3>
    //     <div className="box">{itemList}</div>
    //   </div>
    // );
  }
}


// We are exporting the combination of a component that is connected to the store. Any changes to the state will be reflected in the component because it is “connected” to mapStateToProps and that information is now made available to the component through a prop.

// const mapStateToProps = state => {
//   return {
//     items: state.items
//   };
// };

// This function directs the dispatching of an action by pointing it to an action creator addItem.

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: id => {
//       dispatch(addItem(id));
//     }
//   };
// };

// Connect to store.
export default ShoppingPage;

// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )
