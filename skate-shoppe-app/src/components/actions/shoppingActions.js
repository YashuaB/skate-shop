import { ADD_ITEM,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from "./actionTypes"

//Action creators
//Action to add item in shopping cart
export const addItem = id => {
    return{
        type: ADD_ITEM,
        id
    }
}
//Action to remove item from shopping cart
export const removeItem = id => {
    return{
        type: REMOVE_ITEM,
        id
    }
}
//Action to decrease quantity of item
export const subtractQuantity = id => {
    return{
        type: SUB_QUANTITY,
        id
    }
}
//Action to increase quantity of item
export const addQuantity = id => {
    return{
        type: ADD_QUANTITY,
        id
    }
}
