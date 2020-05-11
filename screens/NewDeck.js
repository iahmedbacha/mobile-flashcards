import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import NewDeckForm from '../components/NewDeckForm';
import { addDeck } from '../redux/actions/decks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function NewDeck(props) {
  const newDeck = (title) => {
    const { dispatch } = props;
    dispatch(
      addDeck({
        title,
        questions: [],
      })
    );
  };
  return (
    <View style={styles.container}>
      <NewDeckForm handleNewDeck={newDeck} />
    </View>
  );
}

export default connect()(NewDeck);
