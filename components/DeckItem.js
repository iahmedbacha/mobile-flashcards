import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function DeckItem({ item }) {
  return (
    <View style={styles.container}>
      <ListItem
        title={item.title}
        subtitle={`${item.questions.length} cards`}
        bottomDivider
        chevron
      />
    </View>
  );
}
