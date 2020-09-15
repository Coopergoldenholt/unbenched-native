import {SAVE_GAMES} from '../actionTypes';

const initialState = {};

export const saveGames = (games) => {
  return {
    type: SAVE_GAMES,
    payload: games,
  };
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case `${SAVE_GAMES}`:
      return {...state, games: payload};

    default:
      return state;
  }
}
