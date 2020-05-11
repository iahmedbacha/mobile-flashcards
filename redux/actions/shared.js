import getInitialData from '../../api/SharedAPI';
import saveQuestion from '../../api/QuestionAPI';
import receiveDecks from './decks';
import receiveQuestions from './questions';
import { ADD_QUESTION } from '../constants/actionTypes';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(([decks, questions]) => {
      dispatch(receiveDecks(decks));
      dispatch(receiveQuestions(questions));
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
