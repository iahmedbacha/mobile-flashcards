import React, { Component } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import DeckItem from './DeckItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class DeckList extends Component {
  render() {
    const { decks } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          {...this.props}
          data={decks}
          renderItem={DeckItem}
          keyExtractor={(item) => item.title}
        />
      </SafeAreaView>
    );
  }
}

function mapStateToProps({ decks }) {
  return { decks: Object.values(decks) };
}

export default connect(mapStateToProps)(DeckList);
