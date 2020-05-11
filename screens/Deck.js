import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Deck() {
  return (
    <View style={styles.container}>
      <Text>deck title</Text>
      <Text>3 cards</Text>
    </View>
  );
}
