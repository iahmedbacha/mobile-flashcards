import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import NavigationService from '../navigation/NavigationService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function DeckItem({ item }) {
  return (
    <View style={styles.container}>
      <ListItem
        key={item.title}
        title={item.title}
        subtitle={`${item.questions.length} cards`}
        bottomDivider
        chevron
        onPress={() => NavigationService.navigate('Deck', { deck: item })}
      />
    </View>
  );
}
