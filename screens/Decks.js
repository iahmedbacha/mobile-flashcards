import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DeckList from '../components/DeckList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Decks() {
  return (
    <View style={styles.container}>
      <DeckList />
    </View>
  );
}
