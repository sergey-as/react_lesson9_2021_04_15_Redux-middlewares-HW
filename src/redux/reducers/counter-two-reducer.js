import {
    INC_CUSTOM_TWO,
    INC_TWO,
    DEC_TWO,
    RESET_TWO,
} from '../action-types';

const initialState = {
    counter: 0
}

// const reducer = (state = {counter: 0}, action) => {
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_CUSTOM_TWO: {
            return {
                ...state, counter: state.counter + action.payload
            }
        }
        case INC_TWO: {
            return {
                ...state, counter: state.counter + 1
            }
        }
        case DEC_TWO: {
            return {
                ...state, counter: state.counter - 1
            }
        }
        case RESET_TWO: {
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