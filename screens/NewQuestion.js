import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import NewQuestionForm from '../components/NewQuestionForm';
import { handleAddQuestion } from '../redux/actions/shared';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function NewQuestion(props) {
  const newQuestion = (question, answer) => {
    const { dispatch, navigation } = props;
    const { deckId } = navigation.state.params;
    dispatch(
      handleAddQuestion({
        deckId,
        question,
        answer,
      })
    );
    props.navigation.navigate('Decks');
  };
  return (
    <View style={styles.container}>
      <NewQuestionForm handleNewQuestion={newQuestion} />
    </View>
  );
}

export default connect()(NewQuestion);
