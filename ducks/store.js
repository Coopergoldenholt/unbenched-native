import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
import gamesReducer from './reducers/gamesReducer';
import seasonReducer from './reducers/seasonReducer';
import workoutReducer from './reducers/workoutReducer';

const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
  season: seasonReducer,
  workout: workoutReducer,
});

const store = createStore(rootReducer);

export default store;
