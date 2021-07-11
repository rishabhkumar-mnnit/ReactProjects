import {createStore,applyMiddleware} from 'redux';
import rootStore from './rootReducer.js';
import logger from 'redux-logger';
const store = createStore(rootStore,applyMiddleware(logger))

export default store
