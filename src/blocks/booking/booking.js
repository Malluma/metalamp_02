import './booking.scss';

import Booking from './Booking-class'

import '../button/button';
import '../date-dropdown/date-dropdown';
import '../dropdown/dropdown';

const bookingCards = document.querySelectorAll('.js-booking');

bookingCards.forEach((bookingCard) => {
  const bookingCardInstance = new Booking(bookingCard);
})