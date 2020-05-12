import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import NavigationService from './NavigationService';

import Decks from '../screens/Decks';
import Deck from '../screens/Deck';
import NewDeck from '../screens/NewDeck';
import NewQuestion from '../screens/NewQuestion';
import Quiz from '../screens/Quiz';

const TopLevelNavigator = createBottomTabNavigator({
  Decks: {
    screen: createStackNavigator({
      Decks,
      Deck,
      NewQuestion,
      Quiz,
    }),
  },
  NewDeck,
});

function AppNavigator() {
  return (
    <TopLevelNavigator
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
}
export default AppNavigator;
