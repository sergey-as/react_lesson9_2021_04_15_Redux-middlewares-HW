import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
} from '../action-types';

const addProductToCart = (id) => ({type: ADD_PRODUCT_TO_CART, payload: id});
const removeProductFromCart = (id) => ({type: REMOVE_PRODUCT_FROM_CART, payload: id});

const toggleItemInCart = (id) => (dispatch, getState) => {
    // 45:00
};
