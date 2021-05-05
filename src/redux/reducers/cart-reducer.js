import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
} from '../action-types';

const initFromLocalStorage = localStorage.getItem('cart');

const initialState = initFromLocalStorage ? JSON.parse(initFromLocalStorage) : {
    productsInCart: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.payload]
            }
        }
        case REMOVE_PRODUCT_FROM_CART: {
            return {
                ...state,
                productsInCart: state.productsInCart.filter(el => action.payload !== el)
            }
        }
        default:
            return state;
    }
}

export default reducer