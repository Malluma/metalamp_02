import * as noUiSlider from 'nouislider';

class RangeSlider {

  constructor(rangeSliderHtml) {

    const options = JSON.parse(rangeSliderHtml.dataset.options);

    this.rangeSliderHtml = rangeSliderHtml;
    this.label = this.rangeSliderHtml.previousElementSibling.querySelector('.range-slider__range');
    this.min = Number(options.min);
    this.max = Number(options.max);
    this.rangeStart = Number(options.rangeStart);
    this.rangeEnd = Number(options.rangeEnd);

    this.sliderFromPlugin = noUiSlider.create(this.rangeSliderHtml, {
      start: [this.rangeStart, this.rangeEnd],
      connect: true,
      range: {
        'min': this.min,
        'max': this.max
      }
    });

    this.bindMethods();
    this.sliderFromPlugin.on('change', this.handleSliderChange);

  }

  bindMethods(){
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(values) {
    this.rangeStart = values[0];
    this.rangeEnd = values[1];
    this.updateLabel(values);
  }

  updateLabel(values) {
    const start = `${this.formatNum(this.rangeStart)}₽`;
    const end = `${this.formatNum(this.rangeEnd)}₽`;
    this.label.textContent = `${start} - ${end}`;
  }

  formatNum(value){
    return new Intl.NumberFormat('ru-RU', {maximumFractionDigits: 0}).format(value);
  }

}

export default RangeSlider;