import './room.scss';

import Room from './Room-class'

import '../carousel/carousel'
import '../rating/rating';

const rooms = document.querySelectorAll('.js-room');

rooms.forEach((room) => {
  const roomInstance = new Room(room);
})