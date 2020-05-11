import { RECEIVE_DECKS, ADD_DECK } from '../constants/actionTypes';
import saveDeck from '../../api/DeckAPI';

export default function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
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
