// Dummy data for testing
import Item1 from "../../images/item1.jpeg";
import Item2 from "../../images/item2.jpeg";
import Item3 from "../../images/item3.jpeg";
import Item4 from "../../images/item4.jpeg";
import Item5 from "../../images/item5.jpeg";
import Item6 from "../../images/item6.jpeg";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/actionTypes";


// constructor() {
//   super()
//   this.state = {
//      id: id
//   }
  
//   this.handleSubmit = this.handleSubmit.bind(this)
//   this.handleChange = this.handleChange.bind(this)

// }
//   componentDidMount(){

//   }


const initState = {
  items: [
    // {
    //   id: 1,
    //   title: "VANS",
    //   description: "Houser Short Sleeve Buttondown Shirt",
    //   dollarSign: "$",
    //   price: 44.5,
    //   img: Item1
    // },
    // {
    //   id: 2,
    //   title: "VANS",
    //   description: "Checker Camp Short Sleeve Buttondown Shirt",
    //   price: 49.5,
    //   img: Item2
    // },
    // {
    //   id: 3,
    //   title: "VANS",
    //   description: "Mo Betta Camp Buttondown Shirt",
    //   price: 54.5,
    //   img: Item3
    // },
    // {
    //   id: 4,
    //   title: "VANS",
    //   description: "Arachnofloria Buttondown Shirt",
    //   price: 44.5,
    //   img: Item4
    // },
    // { 
    //     id: 5, 
    //     title: "Element", 
    //     description: "Blazin' Tee", 
    //     price: 22.0, 
    //     img: Item5 
    // },
    // {
    //   id: 6,
    //   title: "Element",
    //   description: "Liquid Icon Tee",
    //   price: 22.0,
    //   img: Item6
    // }
  ],
  addedItems: [],
  total: 0
};


const ShoppingCartReducer = (state = initState, action) => {
  //ADD ITEM TO THE CART (ShoppingPage)
  if (action.type === ADD_ITEM) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.addedItems.find(item => action.id === item.id);
    // If item exists add quanity
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    }
    // Calculate the total price of all added items
    else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  // REMOVE ITEM FROM THE CART (ShoppingPage)
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);
    //Calculating total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //ADDING QUANTITY (ShoppingCart component)
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  // REDUCING QUANTITY (ShoppingCart component)
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    //If quantity == 0 remove the item
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 10
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 10
    };
  }

  return state;
};

export default ShoppingCartReducer;
