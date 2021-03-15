import { ReactReduxContext } from "react-redux"
import { deleteItem } from "./cart.action";

import CartActionTypes from './cart.types';
import { addItemToCart, deleteItemFromCart, subtractitem } from './cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItem: [],
    inside: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem, action.payload)
            };
        case CartActionTypes.DELETE_ITEM:
            return {
                ...state,
                cartItem: deleteItemFromCart(state.cartItem, action.payload)
            }
        case CartActionTypes.SUBTRACT_ITEM:
            return {
                ...state,
                cartItem: subtractitem(state.cartItem, action.payload)
            }
        case CartActionTypes.DISPLAY:
            return {
                ...state,
                inside: state.inside = action.payload
            }

        default:
            return state;
    }
}

export default cartReducer;