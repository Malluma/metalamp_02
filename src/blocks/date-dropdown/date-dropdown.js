import $ from 'jquery';
import AirDatepicker from 'air-datepicker';

class Datepicker{

  constructor(options){

    this.startDateInput = options.startDateInput;
    this.endDateInput = options.endDateInput;
    this.id = options.id;
    console.log(`in class id: ${this.id}`)

    const datepicker = new AirDatepicker(`.${this.id}`, this.createAirDatepickerOptions());

    return datepicker;
  }

  createAirDatepickerOptions(){

    return {
      multipleDates: true,
      multipleDatesSeparator: ' - ',
      //buttons: ['clear', this.createApplyBtn()],
      buttons: [this.createClearBtn(), this.createApplyBtn()],
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
      onSelect: (dp) => this.onSelectAirDP(dp)
    }

  }


  createClearBtn(){
      return  {
      content: 'очистить',
      className: 'js-date-dropdown__clearBtn',
      onClick: (datepicker) => {
        //datepicker.selectedDates = [];
        datepicker.clear();
        //this.startDateInput.value = '';
        this.endDateInput.value = '';
      }
    }
  }

  createApplyBtn(){
      return  {
      content: 'применить',
      className: 'js-date-dropdown__applyBtn',
      onClick: (datepicker) => {
        const [startDate, endDate] = datepicker.selectedDates;
        this.startDateInput.value = startDate.toLocaleDateString();
        this.endDateInput.value = endDate.toLocaleDateString();
        datepicker.hide();
      }
    }
  }

  
  onSelectAirDP({ datepicker }) {
  
    const [first, second] = datepicker.selectedDates;
    const oneDateSelected = datepicker.selectedDates.length === 1;
    const twoDatesSelected = datepicker.selectedDates.length === 2;
    

    if (oneDateSelected) {
      this.fixFocusDisplay(first, datepicker);
      //this._setState(first, '');
    } else if (twoDatesSelected) {
      //this._setState(first, second);
    }

    this.startDateInput.value = '';
    //this._update(datepicker);
  }
  
  fixFocusDisplay(date, datepicker) {
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

}//class Datepicker

$(() => {
  $('.js-date-dropdown__start').each((index, startDateInput) => {
    const $startDateInput = $(startDateInput);
    const $startDateLabel = $startDateInput.parent();
    const $endDateLabel = $startDateLabel.next();
    const endDateInput = $endDateLabel.children('.js-date-dropdown__end')[0];
    const currentElId = `js-air-datepicker_${index}`;
    //$(startDateInput).attr('id', currentElId);
    $(startDateInput).addClass(currentElId);
    $(endDateInput).addClass(currentElId);
    console.log(startDateInput);
    console.log($startDateInput);
    console.log(endDateInput);
    const datepicker  = new Datepicker({startDateInput: startDateInput, endDateInput: endDateInput, id: currentElId});
    $(endDateInput).on('focus', function() {
      datepicker.show();
    });
  });
});