import {SAVE_SESSION, DESTROY_SESSION} from '../actionTypes';

const initialState = {};

export const saveSession = (user) => {
  return {
    type: SAVE_SESSION,
    payload: user,
  };
};
export const destroySession = () => {
  return {
    type: DESTROY_SESSION,
    payload: null,
  };
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case `${SAVE_SESSION}`:
      return {...state, user: payload};
    case `${DESTROY_SESSION}`:
      return {undefined};

    default:
      return state;
  }
}
