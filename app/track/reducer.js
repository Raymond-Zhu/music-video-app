import { ADD_TO_QUEUE, REMOVE_FROM_QUEUE } from './actionTypes';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_TO_QUEUE:
      return [...state, action.selectedTrack];
    case REMOVE_FROM_QUEUE:
      return state.slice(1);
  }
  return state;
}
