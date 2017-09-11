// @flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import socket from '../../../socket';

export default class TestPage extends React.Component {
  constructor(props: mixed) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentWillMount() {
    socket.on('data', this.handleData);
  }

  handleData = (data : mixed) => {
    this.setState({
      data,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labels}>{JSON.stringify(this.state.data, null, 2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  labels: {
    color: 'blue',
    fontSize: 16,
  },
});
