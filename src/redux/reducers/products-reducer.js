import {
    START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS,
} from '../action-types';

const initFromLocalStorage = localStorage.getItem('counter1');


const initialState = {
    products: [],
    isLoading: false,
}

// const reducer = (state = {counter: 0}, action) => {
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
                // isLoading: false
            }
        }
        case START_PRODUCTS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case END_PRODUCTS_LOADING: {
            return {
                ...state,
                    isLoading: false
            }
        }
        default:
            // console.log('action', action.type, 'does not exist');
            return state;
    }
}

export default reducer