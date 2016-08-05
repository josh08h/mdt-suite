//middlewares to be configured & applied in here.

import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from './initialState';


export default function configureStore(){
	const store = createStore(rootReducer, initialState);
	return store;
}