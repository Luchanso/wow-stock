// @flow
/* eslint-disable */

import io from 'socket.io-client';

type Socket = {
  on: Function,
  emit: Function,
};

declare function io(a: string, b: mixed) : Socket;

const ADDR = 'ws://172.16.0.44:3000';
const socket = io(ADDR, {
  transports: ['websocket'],
});

export default socket;
