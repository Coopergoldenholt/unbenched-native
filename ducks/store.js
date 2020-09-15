import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
import gamesReducer from './reducers/gamesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
});

const store = createStore(rootReducer);

export default store;
