import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* eslint-disable */

export default class Sidebar extends React.PureComponent {
  render() {
    return (
      <View style={styles.menu}>
        <Text style={styles.labels}>First Item</Text>
        <Text style={styles.labels}>Second Item</Text>
        <Text style={styles.labels}>Third Item</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  labels: {
    color: 'red',
    fontSize: 16,
  },
});
