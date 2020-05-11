import { createBottomTabNavigator } from 'react-navigation';

import Decks from '../screens/Decks';
import NewDeck from '../screens/NewDeck';

export default createBottomTabNavigator({
  Decks,
  NewDeck,
});
