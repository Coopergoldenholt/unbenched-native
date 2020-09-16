import {SET_GAMES} from '../actionTypes';

const initialState = {};

export const setGames = (games) => {
  return {
    type: SET_GAMES,
    payload: games,
  };
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case `${SET_GAMES}`:
      return {...state, games: payload};

    default:
      return state;
  }
}
