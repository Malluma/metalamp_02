import $ from 'jquery';

function createAirDatepickerOptions(clearBtn, applyBtn, localDatepicker) {
  
  const selectedDatesArray = createSelectedDatesArray(localDatepicker.dateInput1, localDatepicker.dateInput2)
  const startDate = (selectedDatesArray.length) > 0 ? selectedDatesArray[0] : '';
  console.log('createAirDatepickerOptions')
  console.log(selectedDatesArray)

  return {
    multipleDates: true,
    multipleDatesSeparator: ' - ',
    buttons: [clearBtn, applyBtn],
    range: true,
    dynamicRange: true,
    moveToOtherMonthsOnSelect: false,
    startDate: startDate,
    selectedDates: selectedDatesArray,
    navTitles: {
      days: 'MMMM yyyy',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2'
    },
    prevHtml: "<div class ='icon-arrow_back'></div>",
    nextHtml: "<div class ='icon-arrow_forward'></div>",
    onSelect: (dp) => onSelectAirDP(dp, localDatepicker),
    onShow: (dp) => onSelectAirDP(dp, localDatepicker)
  }

}

//from '19.08.2019' to '2019-08-19'
function formatDateStr(dateToFormat){
  
  if (dateToFormat && dateToFormat.value){
    const arr = dateToFormat.value.split('.');
    return `${arr[2]}-${arr[1]}-${arr[0]}`;
  }

  return '';
  
}

function createSelectedDatesArray(inputStart, inputEnd){

  const result = [];
  const startDateFromLocal = formatDateStr(inputStart);
  const endDateFromLocal = formatDateStr(inputEnd);

  if (startDateFromLocal){
    result.push(startDateFromLocal);
  }

  if (endDateFromLocal){
    result.push(endDateFromLocal);
  }

  return result;

}

function onSelectAirDP({datepicker}, localDatepicker) {
  console.log('onSelectAirDP')
  //console.log(`this.dateInput1.value: ${localDatepicker.dateInput1.value} this.dateInput2.value: ${localDatepicker.dateInput2.value}`)
  if (datepicker === undefined) {
    datepicker = localDatepicker.airDatepicker;
  }
  const date1 = datepicker.selectedDates[0];

  if (datepicker.selectedDates.length === 1) {
    fixFocusCircle(date1, datepicker);
  }

  //localDatepicker.clearDateFields();
  const [startDate, endDate] = datepicker.selectedDates;
  //if (localDatepicker.onlySecondDate) {
    //localDatepicker.dateInput2.value = startDate.toLocaleDateString();
    //localDatepicker.dateInput1.value = '';
    //localDatepicker.onlySecondDate = false;
  //}else{
  if (startDate){
    localDatepicker.dateInput1.value = startDate.toLocaleDateString();
  }
  if (endDate) {
    localDatepicker.dateInput2.value = endDate.toLocaleDateString();
  }
  
  //}

  console.log(`this.dateInput1.value: ${localDatepicker.dateInput1.value} this.dateInput2.value: ${localDatepicker.dateInput2.value}`)

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

export {createAirDatepickerOptions, onSelectAirDP}
