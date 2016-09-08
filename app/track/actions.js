import { ADD_TO_NOW_PLAYING } from './actionTypes';

export function addToNowPlaying(track) {
  return {
    type: ADD_TO_NOW_PLAYING,
    selectedTrack: track
  };
};
