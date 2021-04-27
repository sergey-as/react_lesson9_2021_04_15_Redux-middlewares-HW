import {
    ON_USERS_LOADED,
    ON_ADD_TO_BAD,
    ON_REMOVE_FROM_BAD,
} from '../action-types';

const initialState = {
    users: [],
    badEmploees: [],
}

// const reducer = (state = {counter: 0}, action) => {
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_USERS_LOADED: {
            return {
                ...state,
                users: action.payload
            }
        }
       case ON_ADD_TO_BAD: {
            return {
                ...state,
                badEmploees: [...state.badEmploees, action.payload]
            }
        }
      case ON_REMOVE_FROM_BAD: {
            return {
                ...state,
                badEmploees: state.badEmploees.filter(el => el !== action.payload)
            }
        }

        default:
            // console.log('action', action.type, 'does not exist');
            return state;
    }
}

export default reducer