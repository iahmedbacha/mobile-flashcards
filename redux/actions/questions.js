import { RECEIVE_QUESTIONS } from '../constants/actionTypes';

export default function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
