import {SAVE_SEASON} from '../actionTypes';

const initialState = {};

export const saveSeason = (season) => {
  return {
    type: SAVE_SEASON,
    payload: season,
  };
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case `${SAVE_SEASON}`:
      return {...state, games: payload};

    default:
      return state;
  }
}
