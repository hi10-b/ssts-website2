import { applyMiddleware, combineReducer, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducers from './reducers';

const composed = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(ReduxThunk));
const store = createStore(rootReducers, {}, composed);

export default store;
