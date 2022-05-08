import 'nouislider/dist/nouislider.css';
import './range-slider.scss';
import RangeSlider from './RangeSlider-class.js';

const rangeSliders = document.querySelectorAll('.js-range-slider__slider');

rangeSliders.forEach((rangeSlider) => {
  const rangeSliderInstance = new RangeSlider(rangeSlider);
})