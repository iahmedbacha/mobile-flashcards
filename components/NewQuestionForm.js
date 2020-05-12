import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function NewQuestionForm(props) {
  const [question, setQuestion] = React.useState('');
  const handleQuestionChange = (value) => {
    setQuestion(value);
  };
  const [answer, setAnswer] = React.useState('');
  const handleAnswerChange = (value) => {
    setAnswer(value);
  };
  const { handleNewQuestion } = props;
  return (
    <View style={styles.container}>
      <Text>What is your question and answer?</Text>
      <Input placeholder="Question" onChangeText={handleQuestionChange} />
      <Input placeholder="Answer" onChangeText={handleAnswerChange} />
      <Button
        title="Submit"
        onPress={() => handleNewQuestion(question, answer)}
      />
    </View>
  );
}
