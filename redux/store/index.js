import { createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middlewares';

export default createStore(reducer, middleware);
