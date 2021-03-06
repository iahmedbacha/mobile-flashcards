import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import NewDeckForm from '../components/NewDeckForm';
import { handleAddDeck } from '../redux/actions/decks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function NewDeck(props) {
  const newDeck = (title) => {
    const { dispatch } = props;
    dispatch(
      handleAddDeck({
        title,
        questions: [],
      })
    );
    props.navigation.navigate('Decks');
  };
  return (
    <View style={styles.container}>
      <NewDeckForm handleNewDeck={newDeck} />
    </View>
  );
}

export default connect()(NewDeck);
