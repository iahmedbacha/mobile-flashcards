import getInitialData from '../../api/SharedAPI';
import saveDeck from '../../api/DeckAPI';
import saveQuestion from '../../api/QuestionAPI';
import receiveDecks from './decks';
import receiveQuestions from './questions';
import { ADD_QUESTION, ADD_DECK } from '../constants/actionTypes';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(([decks, questions]) => {
      dispatch(receiveDecks(decks));
      dispatch(receiveQuestions(questions));
    });
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function handleAddDeck(deck) {
  return (dispatch) => {
    return saveDeck(deck).then((deck) => {
      dispatch(addDeck(deck));
    });
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    return saveQuestion(question).then((formattedQuestion) => {
      dispatch(addQuestion(formattedQuestion));
    });
  };
}
