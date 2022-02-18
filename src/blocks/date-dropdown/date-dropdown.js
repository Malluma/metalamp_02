import $ from 'jquery';
import AirDatepicker from 'air-datepicker';

let applyBtn = {
  content: 'применить',
  className: 'js-date-dropdown__applyBtn',
  onClick: (dp) => {
      
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

const calendar = new AirDatepicker(('.js-date-dropdown__1'), {
  multipleDates: true,
  multipleDatesSeparator: ' - ',
  buttons: ['clear', applyBtn],
  range: true,
  dynamicRange: true,
  onSelect: onSelectAirDP
})


