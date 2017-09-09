/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SideMenu from 'react-native-side-menu';
import io from 'socket.io-client';

const ADDR = 'ws://172.16.0.44:3000';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentWillMount() {
    this.socket = io(ADDR);
    this.socket.on('data', this.handleData);
  }

  handleData = (data) => {
    this.setState({
      data,
    });
  };

  render() {
    console.log(this.state.data);
    const menu = (
      <View style={styles.menu}>
        <Text style={styles.labels}>Hello world</Text>
        <Text style={styles.labels}>Hello world</Text>
      </View>
    );

    return (
      <SideMenu menu={menu}>
        <View style={styles.container}>
          <Text style={styles.labels}>{JSON.stringify(this.state.data, null, 2)}</Text>
        </View>
      </SideMenu>
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
    color: 'red',
    fontSize: 16,
  },
});
