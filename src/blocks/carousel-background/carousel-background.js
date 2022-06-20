import './carousel-background.scss';

import CarouselBackground from './Carousel-background-class';

const carousels = document.querySelectorAll('.js-carousel-background');

carousels.forEach((carousel) => {
  const carouselInstance = new CarouselBackground(carousel);
})