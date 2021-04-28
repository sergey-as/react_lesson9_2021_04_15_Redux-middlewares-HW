import {
    INC_CUSTOM,
    INC,
    DEC,
    RESET,
} from '../action-types';

const initFromLocalStorage = localStorage.getItem('counter1');


const initialState = initFromLocalStorage ? JSON.parse(initFromLocalStorage) : {
    counter: 0,
    // isAllowedToChange: false
    isAllowedToChange: true
}

// const reducer = (state = {counter: 0}, action) => {
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_CUSTOM: {
            return {
                ...state, counter: state.counter + action.payload
            }
        }
        case INC: {
            return {
                ...state, counter: state.counter + 1
            }
        }
        case DEC: {
            return {
                ...state, counter: state.counter - 1
            }
        }
        case RESET: {
            return {
                ...state, counter: 0
            }
        }
        default:
            // console.log('action', action.type, 'does not exist');
            return state;
    }
}

export default reducer