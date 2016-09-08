import { ADD_TO_NOW_PLAYING } from './actionTypes';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_TO_NOW_PLAYING:
      return [...state, action.selectedTrack];
  }
  return state;
}
