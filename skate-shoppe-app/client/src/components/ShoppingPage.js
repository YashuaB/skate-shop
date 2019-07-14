import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "./actions/shoppingActions";
import axios from "axios";

class ShoppingPage extends Component {
  //Adds the clicked item to the shopping cart.
  state = {
    inventory: []
  };


  componentDidMount() {
    console.log("test");

    let url = "";

    if (this.props.match.params.item) {
      url = `http://localhost:8080/inventory/${this.props.match.params.item}`;
    }

    else url = "http://localhost:8080/all-inventory";
    console.log(this.props);

    axios
      .get(url)
      .then(res => {
      
        const data = res.data;
        this.setState({ inventory: data });
        
      })
      .catch(error => {
        console.log(error);
      });

    
  }

  handleClick = id => {
    this.props.addItem(id);
  };

  render() {
   
    return (
      // <h3 className="center">SHOP</h3>
      <div className="box">
        {this.state.inventory ? (
          this.state.inventory.map(item => {
            return (
              <div className="card" key={item.id}>
                <div className="card-image">
                  <img src={item.image} alt={item.itemName} />
                  <span className="card-title">{this.state.itemName}</span>
                  <span
                    to="/"
                    className="btn-floating halfway-fab waves-effect waves-light grey"
                    onClick={() => {
                      this.handleClick(item.id);
                    }}
                  >
                    <i className="material-icons">add</i>
                  </span>
                </div>
                <div className="card-content">
                  <p>{item.itemName}</p>
                  <p>
                    <b>Price: ${item.price}</b>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
            <div>No data to display please check database</div>
          )}
      </div>
    );

    // });
    // Item list displayed here.
    // return (
    //   <div className="container">
    //     <div className="box">{itemList}</div>
    //   </div>
    // );
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

// Connect to store and export shopping page
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingPage);
