import React, { Component } from "react";
import axios from 'axios'
import { connect } from "react-redux";
import { addItem } from "../actions/shoppingActions";


class ShoppingPage extends Component {
  //Adds the clicked item to the shopping cart.


  state = {
    inventory:[]
  }

//   componentDidMount(){
//     this.getUsers();
//   }

//   getUsers = _ => {
//         axios.get('all-inventory/:singleItem?')
//     .then((response) => {
//       console.log(response.data.inventory);
//       this.setState({inventory: response.data.inventory});
//     })
//     // .then(({response}) => this.setState({users: response.users}))
//     .catch(error => console.log(error));
//   }
//   showUsers = item => <div key={item.id}>{item.itemName}</div>
//   render() {//building react method that comes inse od react component
//     const { users } = this.state;
//     return (//jsx code and can return only a single parent tag
//       <div >
//         {users.inventory.map(this.showUsers)}
//       </div>
//     );
//   }
// }







































  componentDidMount(){
    this.getItem()
  }

  getItem = _ =>{
    axios.get('/all-inventory/:singleItem?')
    .then(response => response.json())
    .then(response => this.setState({ inventory: response.data}))
    .catch(err => console.error(err))

  }

  renderItem = ({itemName, price}) => <div key={itemName}>{price}</div>

  render() {
    const {inventory} = this.state
    return (
      <div>
      {inventory.map(this.renderItem)}
      </div>
    )
  }
  // componentDidMount() {
  //   let self = this;
  //    fetch('/all-inventory/:singleItem', {
  //       method: 'GET'
  //   }).then(function(response) {
  //       if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //       }
  //       // return response.json();
      
  //   }).then(function(data) {
  //       self.setState({inventory: data});
  //       console.log(data)
  //   }).catch(err => {
  //   console.log('caught it!',err);
    
  //   })
  // }
  
  // render() {
  //   return (
  //   <div className="container"> 
  //       <div className="panel panel-default p50 uth-panel">
  //           <table className="table table-hover">
  //               <thead>
  //                   <tr>
  //                       <th>Member name</th>
  //                       <th>Member email</th>
  //                       <th>Blood Group</th>
  //                       <th>Phone number</th>
  //                       <th>Action</th>
  //                   </tr>
  //               </thead>
  //               <tbody>
  //               {this.state.inventory.map(member =>
  //                   <tr key={member.id}>
  //                   <td>{member.itemName} </td>
  //                   <td>{member.price}</td>
                    
                   
  //                   </tr>
  //               )}
  //               </tbody>
  //           </table>
  //       </div>
  //   </div>
  //   );
  // }
  // }
//---------------------------------------------------------------------------------------
//   componentDidMount(){


//     fetch("/all-inventory/:singleItem")
//     .then(results => {
//       return results.json()
//     }).then(data => {
//       let inventory = data.results.map((item) =>{
//         return(
//           <div key={item.results}>
//            <img src={inventory.image} alt=""/>
//           </div>
//         )
//       })
//       this.setState({inventory:inventory})
//       console.log("state", this.state.inventory)
//     })
//   }

//   handleClick = id => {
//     this.props.addItem(id);
//   };

//   render() {
//     // Renders items on the page in cards.
//     // let itemList = this.props.items.map(item => {
//       return (
//         <div className="card" key={this.state.inventory.id}>
//           <div className="card-image">
//             <img src={this.state.inventory.image} alt={this.state.itemName} />
//             <span className="card-title">{this.state.itemName}</span>
//             <span
//               to="/"
//               className="btn-floating halfway-fab waves-effect waves-light grey"
//               onClick={() => {
//                 this.handleClick(this.state.item.id);
//               }}
//             >
//               <i className="material-icons">Add</i>
//             </span>
//           </div>
//           <div className="card-content">
//             <p>{this.state.itemName}</p>
//             <p>
//               <b>Price: {this.state.price}$</b>
//             </p>
//           </div>
//         </div>
//       );
//     // });
// // Item list displayed here.

//     // return (
//     //   <div className="container">
//     //     <h3 className="center">SHOP</h3>
//     //     <div className="box">{itemList}</div>
//     //   </div>
//     // );
//   }
// }


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
}
export default ShoppingPage;

// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )




























