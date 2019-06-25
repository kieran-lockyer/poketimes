import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from './redux/reducers/rootReducer'
// import { populatePosts } from './redux/actions/postActions'

// const store = createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace:true})
// )

// fetch('http://www.mocky.io/v2/5d117351310000a30808cc92')
//     .then(res => res.json())
//     .then(data => {
//         store.dispatch(populatePosts(data.splice(0,8)))
//     }).catch(err => {
//         console.error('error', err)
//     })

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
