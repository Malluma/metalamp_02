import './carousel.scss';

import Carousel from './Carousel-class';

const carousels = document.querySelectorAll('.js-carousel');

carousels.forEach((carousel) => {
  const carouselInstance = new Carousel(carousel);
})