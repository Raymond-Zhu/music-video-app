import { ADD_TO_QUEUE, REMOVE_FROM_QUEUE } from './actionTypes';

export function addToQueue(track) {
  return {
    type: ADD_TO_QUEUE,
    selectedTrack: track
  };
};

export function removeFromQueue() {
  return {
    type: REMOVE_FROM_QUEUE
  };
};


