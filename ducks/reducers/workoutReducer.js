import {START_WORKOUT} from '../actionTypes';

const initialState = {};

export const startWorkout = (workout) => {
  return {
    type: START_WORKOUT,
    payload: workout,
  };
};

// export const destroySession = () => {
//   return {
//     type: DESTROY_SESSION,
//     payload: null,
//   };
// };

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case `${START_WORKOUT}`:
      return {workout: payload};

    default:
      return state;
  }
}
