import {createStore, applyMiddleware} from "redux";
import {reducer} from './reducers';

const logger = (store) => (next) => (action) => {
    console.log(store, action)
    next()
}
const middlewares = [logger];

export const store = createStore(
    reducer,
    applyMiddleware(),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log('store', store);
