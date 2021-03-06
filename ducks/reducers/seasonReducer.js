import {SAVE_SEASON, SAVE_AVERAGES, SAVE_GOALS} from '../actionTypes';

const initialState = {};

export const saveSeason = (season) => {
  return {
    type: SAVE_SEASON,
    payload: season,
  };
};
export const saveAverages = (season) => {
  return {
    type: SAVE_AVERAGES,
    payload: season,
  };
};
export const saveGoals = (goals) => {
  return {
    type: SAVE_GOALS,
    payload: goals,
  };
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case `${SAVE_SEASON}`:
      return {...state, season: payload};
    case `${SAVE_AVERAGES}`:
      return {...state, averages: payload};
    case `${SAVE_GOALS}`:
      return {...state, goals: payload};

    default:
      return state;
  }
}
