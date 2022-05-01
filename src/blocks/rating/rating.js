import './rating.scss';
import Rating from './Rating-class';

const ratings = document.querySelectorAll('.js-rating');

ratings.forEach((ratingHtml) => {
  const ratingInstance = new Rating(ratingHtml);

})