import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Deck(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>{`${navigation.state.params.deck.title}`}</Text>
      <Text>{`${navigation.state.params.deck.questions.length} cards`}</Text>
      <Button
        title="Add Card"
        onPress={
          () =>
            navigation.navigate('NewQuestion', {
              deckId: navigation.state.params.deck.title,
            })
          // eslint-disable-next-line react/jsx-curly-newline
        }
      />
      <Button
        title="Start Quiz"
        onPress={
          () =>
            props.navigation.navigate('Quiz', {
              deck: navigation.state.params.deck,
            })
          // eslint-disable-next-line react/jsx-curly-newline
        }
      />
    </View>
  );
}
