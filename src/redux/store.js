import { applyMiddleware, combineReducer, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import allReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	allReducers,
	compose(applyMiddleware(ReduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
