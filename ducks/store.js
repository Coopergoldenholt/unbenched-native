import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
import gamesReducer from './reducers/gamesReducer';
import seasonReducer from './reducers/seasonReducer';

const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
  season: seasonReducer,
});

const store = createStore(rootReducer);

export default store;
