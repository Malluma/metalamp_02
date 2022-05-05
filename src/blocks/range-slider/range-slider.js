//import noUiSlider from 'nouislider';
//import 'nouislider/dist/nouislider.css';

import * as noUiSlider from 'nouislider';
//import 'nouislider/dist/nouislider.css';

import './range-slider.scss';

const rangeSliders = document.querySelectorAll('.js-range-slider');

rangeSliders.forEach((rangeSlider) => {
  noUiSlider.create(rangeSlider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
  });
  console.log(rangeSlider);
})