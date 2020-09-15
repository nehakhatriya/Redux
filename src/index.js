import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore , combineReducers, applyMiddleware} from 'redux'
import {Provider}  from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import counterreducer from './counter-reducer'
import resultreducer from './result-reducer'
import thunk from 'redux-thunk'

const rootReducer=combineReducers({
     ctr: counterreducer,
     res: resultreducer
})
const store=createStore(rootReducer,applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
