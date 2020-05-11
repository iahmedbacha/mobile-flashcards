import { combineReducers } from 'redux';
import decks from './decks';
import questions from './questions';

export default combineReducers({
  decks,
  questions,
});
