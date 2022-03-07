import $ from 'jquery';
import AirDatepicker from 'air-datepicker';

class Datepicker{

  constructor(options){

    this.startDateInput = options.startDateInput;
    this.endDateInput = options.endDateInput;
    this.id = options.id;
    console.log(`in class id: ${this.id}`)

    const datepicker = new AirDatepicker(`#${this.id}`, this.createAirDatepickerOptions());

    return datepicker;
  }

  createAirDatepickerOptions(){

    return {
      multipleDates: true,
      multipleDatesSeparator: ' - ',
      buttons: ['clear', applyBtn],
      range: true,
      dynamicRange: true,
      moveToOtherMonthsOnSelect: false,
      navTitles: {
        days: 'MMMM yyyy',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
      },
      prevHtml: "<div class ='icon-arrow_back'></div>",
      nextHtml: "<div class ='icon-arrow_forward'></div>",
      onSelect: onSelectAirDP
    }

  }
}

let applyBtn = {
  content: 'применить',
  className: 'js-date-dropdown__applyBtn',
  onClick: (dp) => {
    console.log(dp);
    console.log(dp.selectedDates);
    const [startDate, endDate] = datepicker.selectedDates;

  }
}

function onSelectAirDP({ datepicker }) {

  const [first, second] = datepicker.selectedDates;
  const oneDateSelected = datepicker.selectedDates.length === 1;
  const twoDatesSelected = datepicker.selectedDates.length === 2;

  if (oneDateSelected) {
    fixFocusDisplay(first, datepicker);
    //this._setState(first, '');
  } else if (twoDatesSelected) {
    //this._setState(first, second);
  }

  //this._update(datepicker);
}

function fixFocusDisplay(date, datepicker) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const selector = `.air-datepicker-cell[data-year=${year}][data-month=${month}][data-date=${day}]`;
  const $selectedCell = $(selector, datepicker.$datepicker);

  if ($selectedCell.hasClass('-focus-')) {
    $selectedCell.addClass('-range-from-');
    $selectedCell.addClass('-range-to-');
    console.log($selectedCell)
  }
}

$(() => {
  $('.js-date-dropdown__start').each((index, startDateInput) => {
    console.log('node');
    console.log(startDateInput);
    const $startDateInput = $(startDateInput);
    const $startDateLabel = $startDateInput.parent();
    const $endDateLabel = $startDateLabel.next();
    const endDateInput = $endDateLabel.children('.js-date-dropdown__end')[0];
    const currentId = `js-date-dropdown__start${index}`;
    console.log(`currentId ${currentId}`);
    $(startDateInput).attr('id', currentId);
    const datepicker = new Datepicker({startDateInput: startDateInput, endDateInput: endDateInput, id: currentId});
  });
});