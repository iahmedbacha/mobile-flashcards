import { getDecksData, getQuestionsData } from '../utils/data';

export default function getInitialData() {
  return Promise.all([getDecksData(), getQuestionsData()]);
}
