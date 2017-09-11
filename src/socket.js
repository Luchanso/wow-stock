import io from 'socket.io-client';

const ADDR = 'ws://172.16.0.44:3000';
const socket = io(ADDR, {
  transports: ['websocket'],
});

export default socket;
