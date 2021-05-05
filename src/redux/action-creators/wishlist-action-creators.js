import {
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
} from '../action-types';

const addProductToWishlist = (id) => ({type: ADD_PRODUCT_TO_WISHLIST, payload: id});
const removeProductFromWishlist = (id) => ({type: REMOVE_PRODUCT_FROM_WISHLIST, payload: id});

const toggleItemInWishlist = (id) => (dispatch, getState) => {
    const {wishlist: {productsInWishlist}} = getState();
    const alreadyExists = !!productsInWishlist.find(el => el === id);
    dispatch(alreadyExists ? removeProductFromWishlist(id) : addProductToWishlist(id));
};

export {
    toggleItemInWishlist,
    addProductToWishlist,
    removeProductFromWishlist,
}