import $ from 'jquery';

function createAirDatepickerOptions(clearBtn, applyBtn, localDatepicker) {
  
  return {
    multipleDates: true,
    multipleDatesSeparator: ' - ',
    buttons: [clearBtn, applyBtn],
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
    onSelect: (dp) => onSelectAirDP(dp, localDatepicker)
  }

}

function onSelectAirDP({datepicker}, localDatepicker) {
  const date1 = datepicker.selectedDates[0];

  if (datepicker.selectedDates.length === 1) {
    fixFocusCircle(date1, datepicker);
  }

  localDatepicker.clearDateFields();
}

function fixFocusCircle(date, airDatepicker) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const selector = `.air-datepicker-cell[data-year=${year}][data-month=${month}][data-date=${day}]`;
  const $selectedCell = $(selector, airDatepicker.$datepicker);

  if ($selectedCell.hasClass('-focus-')) {
    $selectedCell.addClass('-range-from-');
    $selectedCell.addClass('-range-to-');
  }
}

export {createAirDatepickerOptions}
