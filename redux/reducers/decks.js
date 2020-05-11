import { RECEIVE_DECKS, ADD_DECK } from '../constants/actionTypes';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.title]: action,
      };
    default:
      return state;
  }
}
