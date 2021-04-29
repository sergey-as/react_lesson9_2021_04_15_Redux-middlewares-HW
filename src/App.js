// https://www.youtube.com/watch?v=_ZK-FWGWRdk
// Redux-middlewares-async
// hw:
// 1. Написати усе, що було у лекції - ОК
// 2. Кожному товару додати кнопку "Add to wishlist" та "Add to Shopping Cart"
// після кліку та додавання кнопки змінюють колір
// при повторному кліку вилучаємо з (корзини, вішліста)
// 3. header: count in wishlist, count in Shopping Cart, total summa in wishlist, total summa in Shopping Cart
// 4!!! зберегти це все на localStorage (через middleware, або не через middleware, або на рівні action

import './App.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {
    incCustomAction,
    incAction,
    decAction,
    resetAction,
    onUserLoaded,
    onAddToBad,
    onRemoveFromBad,

    startProductsLoading,
    endProductsLoading,
    setProducts,
    loadProducts,
} from './redux/action-creators'

import {store} from "./redux";

const PhotosList = () => {
    const dispatch = useDispatch();
    const users = useSelector(({userReducer: {users}}) => users)
    const badEmploees = useSelector(({userReducer: {badEmploees}}) => badEmploees)

    const fetchPhotos = async () => {
        // const resp = await fetch('https://jsonplaceholder.typicode.com/photos');
        const resp = await fetch('https://dummyapi.io/data/api/user?limit=10', {
            headers: {
                'app-id': 'lTE5abbDxdjGplutvTuc'
            }
        });
        const json = await resp.json();
        // console.log(json);

        dispatch(onUserLoaded(json.data))
    }

    useEffect(() => {
        if (!users.length) {
            fetchPhotos()
        }
    }, [])

    return (
        // <h1>PhotosList</h1>
        <div>
            {users.map(el => (
                <img
                    style={{
                        filter: badEmploees.includes(el.id) ? "blur(3px)" : ''
                    }}
                    onClick={() => {
                        const alredyInList = badEmploees.includes(el.id)
                        const answer = !alredyInList && window.confirm('точно кікнути людну?')
                        if (answer) {

                            return dispatch(onAddToBad(el.id))
                        }
                        alredyInList && dispatch(onRemoveFromBad(el.id))
                    }
                    }
                    key={el.id}
                    src={el.picture}
                    alt={el.firstName}/>
            ))}
        </div>
    )
}

const Products = () => {
    const {products, isLoading} = useSelector(store => store.products);
    // console.log('products', products, 'isLoading', isLoading);
    const dispatch = useDispatch();

    // const error = () => {
    //     // throw new Error()
    //     // undefined();
    //     try {
    //         throw new Error();
    //         console.log('TRY');
    //         // return
    //     } catch (e) {
    //         console.log(e);
    //         console.log('CATCH');
    //         // return;
    //     } finally {
    //         console.log('FINALLY');
    //     }
    //     console.log('FINALLY...');
    // }
    // error();

    // const fetchProducts = async () => {
    //
    //     try {
    //         dispatch(startProductsLoading());
    //         const resp = await fetch('https://fakestoreapi.com/products');
    //         const json = await resp.json();
    //
    //         dispatch(setProducts(json));
    //
    //         // console.log(json);
    //     } catch (e) {
    //         console.error(e);
    //     } finally {
    //         dispatch(endProductsLoading());
    //     }
    // }

    useEffect(() => {
        // fetchProducts();
        // setProducts();
        dispatch(loadProducts());
    }, []);

    // 50:58
    return (
        <div>
            <h1>
                products list
            </h1>
            {isLoading && (
                <h1 style={{color: 'red'}}>LOADING</h1>
            )}

            {!isLoading && !!products.length && (
                products.map(el => (
              <div key={el.id} style={{width: '50%', margin: '10px auto'}}>
                  <h3>{el.id} - {el.category} - {el.title}</h3>
                  <h4>{el.price}</h4>
                  <h4>{el.description}</h4>
                  <img style={{width: '100%'}} src={el.image} alt={el.title}/>
                  <hr/>
              </div>
                ))
            )}
        </div>
    )
}

export default function App() {
    // const store = useSelector((store) => {
    //     console.log('app store',store);
    //     return store;
    // })
    //
    // const counter = useSelector(({counter}) => {
    //      return counter;
    //  })
    //
    // const store = useSelector((store) => store);
    // console.log('app store',store);
    //
    // const counter = useSelector(({counter}) => counter);
    // const dispatch = useDispatch();
    //
    // const counter1 = useSelector(({counter1: {counter}}) => counter);
    // const counter2 = useSelector(({counter2: {counter}}) => counter);

    const {counter1, counter2} = useSelector(({counter1, counter2}) => ({
        counter1: counter1.counter,
        counter2: counter2.counter,
    }))

    const dispatch = useDispatch();

    return (
        <div className="App">
            {/*<button onClick={() => dispatch({type: INC_CUSTOM, payload: 102})}>inc custom</button>*/}
            {/*<button onClick={() => dispatch({type: INC})}>inc</button>*/}
            {/*<button onClick={() => dispatch({type: DEC})}>dec</button>*/}
            {/*<button onClick={() => dispatch({type: RESET})}>reset</button>*/}

            {/*<button onClick={() => dispatch(incCustomAction(102))}>inc custom</button>*/}
            {/*<button onClick={() => dispatch(incAction())}>inc</button>*/}
            {/*<button onClick={() => dispatch(decAction())}>dec</button>*/}
            {/*<button onClick={() => dispatch(resetAction())}>reset</button>*/}

            {/*<h1>{counter1} - 1</h1>*/}
            {/*<h1>{counter2} - 2</h1>*/}
            {/*<br/>*/}
            {/*{!(counter1 % 2) && <PhotosList/>}*/}
            <br/>

            <Products/>
        </div>
    );
}
//action-creators: --> to ./redux/action-creators
// const incCustomAction = (payload) => ({type: INC_CUSTOM, payload})
// const incAction = () => ({type: INC})
// const decAction = () => ({type: DEC})
// const resetAction = () => ({type: RESET})


// import {connect} from "react-redux";
//
// // function App({counter, ...rest}) {
// //     console.log(rest);
// function App({counter, inc, dec, reset}) {
//
//     return (
//         <div className="App">
//             <h1>{counter}</h1>
//             <button onClick={inc}>inc</button>
//             <button onClick={dec}>dec</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
// }
// const mapStateToProps = (state) => ({
//     counter: state.counter
// })
// const mapDispatchToProps = (dispatch) => ({
//     inc: () => dispatch({type: 'INC'}),
//     dec: () => dispatch({type: 'DEC'}),
//     reset: () => dispatch({type: 'RESET'}),
// })
// export default connect(mapStateToProps,mapDispatchToProps)(App);