import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import ShoppingCartReducer from './components/reducers/ShoppingCartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(ShoppingCartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));