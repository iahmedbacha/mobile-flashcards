import React from 'react';
import { StyleSheet, View } from 'react-native';
import DeckList from '../components/DeckList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Decks(props) {
  return (
    <View style={styles.container}>
      <DeckList {...props} />
    </View>
  );
}
