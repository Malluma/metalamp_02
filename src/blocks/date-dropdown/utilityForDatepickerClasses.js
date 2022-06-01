import $ from 'jquery';

function createAirDatepickerOptions(clearBtn, applyBtn, localDatepicker) {
  
  const singleDropdown = localDatepicker.dateInput;
  const selectedDatesArray = localDatepicker.createSelectedDatesArray();
 
  let startDate = (selectedDatesArray && selectedDatesArray.length > 0) ? selectedDatesArray[0] : '';
  if (selectedDatesArray === undefined && localDatepicker.dateInput2.value){//only dateEnd is given at first start
    startDate = formatDateStr(localDatepicker.dateInput2.value);
  }

  const options = {
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
    onSelect: (dp) => onSelectAirDP(dp, localDatepicker),
    onShow: (dp) => onSelectAirDP(dp, localDatepicker),
    onHide: (isFinished) => onHideAirDP(isFinished, localDatepicker)
  }

  if (singleDropdown){
    options.dateFormat = localDatepicker.getDateFormatOptionForPluginCalendar();
  }
  if (selectedDatesArray !== undefined){
    options.selectedDates = selectedDatesArray;
  }
  if (startDate){
    options.startDate = startDate;
  }

  return options;

}

//from '19.08.2019' to '2019-08-19'
function formatDateStr(dateToFormat){
  const arr = dateToFormat.split('.');
  return `${arr[2]}-${arr[1]}-${arr[0]}`;
}

function onSelectAirDP({datepicker}, localDatepicker) {

  if (datepicker === undefined) {
    datepicker = localDatepicker.airDatepicker;
  }
  const date1 = datepicker.selectedDates[0];

  if (datepicker.selectedDates.length === 1) {
    fixFocusCircle(date1, datepicker);
  }

  //localDatepicker.clearDateFields();
  let [startDate, endDate] = datepicker.selectedDates;
  if (!localDatepicker.dateInput) {// for double only
    if (localDatepicker.onlySecondDateAtStart) {

      const date2 = new Date(formatDateStr(localDatepicker.dateInput2.value));
    
      selectCell(date2, datepicker)
      datepicker.selectDate(date2);
      localDatepicker.onlySecondDateAtStart = false;

    }else{
      if (startDate){
        localDatepicker.dateInput1.value = startDate.toLocaleDateString();
      }
      if (endDate) {
        localDatepicker.dateInput2.value = endDate.toLocaleDateString();
      }
    }
  }

}

function onHideAirDP(isFinished, localDatepicker) {

  if (!isFinished){
    return;
  }
  
  if (localDatepicker.dontSetInputDatesFromPrevDates){
    localDatepicker.dontSetInputDatesFromPrevDates = false;
    return;
  }

  setInputDatesFromPrevDates(localDatepicker.airDatepicker, localDatepicker);

}

function setInputDatesFromPrevDates(airDP, localDatepicker){

  localDatepicker.setInputDatesFromPrev();
  const selectedDates = localDatepicker.createSelectedDatesArray();

  const airDPSelectedDatesCopy = [... airDP.selectedDates];
  airDPSelectedDatesCopy.forEach((selectedDate) => {
    airDP.unselectDate(selectedDate);
  })

  if (selectedDates !== undefined){
    airDP.selectDate(selectedDates);
  }

}

function fixFocusCircle(date, airDatepicker) {
  addClassToDateCell(date, ['-range-from-', '-range-to-'], airDatepicker);
}

function selectCell(date, airDatepicker) {
  addClassToDateCell(date, ['-range-from-', '-range-to-', '-selected-'], airDatepicker);  
}

function addClassToDateCell(date, classes, airDatepicker, classToCheck='-focus-'){
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const selector = `.air-datepicker-cell[data-year=${year}][data-month=${month}][data-date=${day}]`;
  const $selectedCell = $(selector, airDatepicker.$datepicker);

  if ($selectedCell.hasClass(classToCheck)) {
    classes.forEach((className) => {
      $selectedCell.addClass(className);
    })
  }
}

export {createAirDatepickerOptions, formatDateStr}
