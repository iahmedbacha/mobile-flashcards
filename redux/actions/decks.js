import { RECEIVE_DECKS } from '../constants/actionTypes';

export default function receiveQuestions(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}
