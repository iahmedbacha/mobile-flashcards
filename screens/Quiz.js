import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Quiz extends Component {
  state = {
    score: 0,
    count: 0,
    show: false,
  };

  handleSubmit(answer) {
    const { questions } = this.props;
    const { count } = this.state;
    const result = answer === questions[count].answer;
    this.setState((prevState) => ({
      score: result ? prevState.score + 1 : prevState.score,
      count: prevState.count + 1,
      show: false,
    }));
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleReplay() {
    this.setState({ score: 0, count: 0, show: false });
  }

  render() {
    const { questions, navigation } = this.props;
    const { count, show, score } = this.state;
    if (count === questions.length) {
      return (
        <View style={styles.container}>
          <Text>{`Number of questions answered correctly: ${score}`}</Text>
          <Button title="Restart Quiz" onPress={() => this.handleReplay()} />
          <Button
            title="Back to Deck"
            onPress={
              () =>
                navigation.navigate('Deck', {
                  deck: navigation.state.params.deck,
                })
              // eslint-disable-next-line react/jsx-curly-newline
            }
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>{`${questions.length - count} question remaining`}</Text>
        <Text>{`Question is: ${questions[count].question}`}</Text>
        {show && <Text>{`Answer is: ${questions[count].answer}`}</Text>}
        <Button title="Show Answer" onPress={() => this.handleShow()} />
        <Button title="Correct" onPress={() => this.handleSubmit('correct')} />
        <Button
          title="Incorrect"
          onPress={() => this.handleSubmit('incorrect')}
        />
      </View>
    );
  }
}

function mapStateToProps({ questions }, { navigation }) {
  const { state } = navigation;
  return {
    questions: Object.values(questions).filter(
      (question) => question.deckId === state.params.deck.title
    ),
  };
}

export default connect(mapStateToProps)(Quiz);
