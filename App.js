import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { handleInitialData } from './redux/actions/shared';
import AppNavigator from './navigation/Screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      return null;
    }
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

function mapStateToProps({ decks, questions }) {
  return {
    isLoaded: !(
      Object.keys(decks).length === 0 &&
      decks.constructor === Object &&
      Object.keys(questions).length === 0 &&
      questions.constructor === Object
    ),
  };
}

export default connect(mapStateToProps)(App);
