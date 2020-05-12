import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_QUESTION,
} from '../constants/actionTypes';

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
        [action.deck.title]: action.deck,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.deckId]: {
          ...state[action.question.deckId],
          questions: state[action.question.deckId].questions.concat(
            action.question.id
          ),
        },
      };
    default:
      return state;
  }
}
