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

export default function NewDeckForm(props) {
  const [title, setTitle] = React.useState('');
  const handleTitleChange = (value) => {
    setTitle(value);
  };
  const { handleNewDeck } = props;
  return (
    <View style={styles.container}>
      <Text>What is the title of your new deck?</Text>
      <Input placeholder="Deck Title" onChangeText={handleTitleChange} />
      <Button title="Submit" onPress={() => handleNewDeck(title)} />
    </View>
  );
}
