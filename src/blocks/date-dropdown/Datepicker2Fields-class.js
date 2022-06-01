import AirDatepicker from 'air-datepicker';
import {createAirDatepickerOptions, formatDateStr} from './utilityForDatepickerClasses';

class Datepicker2Fields {

  constructor(options) {

    this.dateInput1 = options.startDateInput;
    this.dateInput2 = options.endDateInput;
    this.setPrevInputDates();
    this.onlySecondDateAtStart = this.dateInput1.value === '' && this.dateInput2.value;

    this.airDatepicker = new AirDatepicker(`.${options.id}`,
      createAirDatepickerOptions(this.createClearBtn(), this.createApplyBtn(), this));

    this.connectGivenDatesWithAirDatepicker();
    
    this.handleDate2Click = this.handleDate2Click.bind(this);
    this.dateInput2.addEventListener('click', this.handleDate2Click)
    this.dontSetInputDatesFromPrevDates = false;

  }

  setPrevInputDates(){
    this.prevDate1 = this.dateInput1.value;
    this.prevDate2 = this.dateInput2.value;
  }

  setInputDatesFromPrev(){
    this.dateInput1.value = this.prevDate1;
    this.dateInput2.value = this.prevDate2;
  }

  connectGivenDatesWithAirDatepicker(){
    if(this.onlyEndDateIsGiven()) {
      this.airDatepicker.setFocusDate(formatDateStr(this.dateInput2.value));
    }

    //to fix circle if only 1 date is given
    if (this.airDatepicker.selectedDates.length === 1) {
      this.airDatepicker.setFocusDate(this.airDatepicker.selectedDates[0]);
      if (this.dateInput2) {
        this.onlySecondDate = true;
      } 
    }
    
    if(this.dateInput1.value && this.dateInput2.value) {
      const [startDate, endDate] = this.airDatepicker.selectedDates;
      const selectedDates = [];
      if (startDate){
        selectedDates.push(startDate);
      }
      if(endDate){
        selectedDates.push(endDate);
      }

      if (selectedDates.length > 0) {
        this.airDatepicker.selectDate(selectedDates);
      }
    }
  }

  createClearBtn() {
    return {
      content: 'очистить',
      className: 'js-date-dropdown__clearBtn',
      onClick: (datepicker) => this.clearDatepicker(datepicker)
    }
  }

  clearDatepicker(datepicker) {
    datepicker.clear();
    this.clearDateFields();
  }

  clearDateFields() {
    this.dateInput1.value = '';
    this.dateInput2.value = '';
  }

  createApplyBtn() {
    return {
      content: 'применить',
      className: 'js-date-dropdown__applyBtn',
      onClick: (datepicker) => {

        const [startDate, endDate] = datepicker.selectedDates;
        if (startDate){
          this.dateInput1.value = startDate.toLocaleDateString();
        }
        if (endDate) {
          this.dateInput2.value = endDate.toLocaleDateString();
        }

        this.setPrevInputDates();

        //to help to catch date change in other blocks
        this.dateInput1.dispatchEvent(new Event('change')); 
        this.dontSetInputDatesFromPrevDates = true;  
        datepicker.hide();
        
      }
    }
  }

  handleDate2Click(){
    this.airDatepicker.show();
  }

  createSelectedDatesArray(){
    const result = [];
    const inputStart = this.dateInput1;
    const inputEnd = this.dateInput2;

    if (this.onlyEndDateIsGiven()){
      return undefined;
    }

    const startDateFromLocal = (inputStart && inputStart.value) ? formatDateStr(inputStart.value) : '';
    const endDateFromLocal =  (inputEnd && inputEnd.value) ? formatDateStr(inputEnd.value) : '';
  
    if (startDateFromLocal){
      result.push(startDateFromLocal);
    }
    if (endDateFromLocal){
      result.push(endDateFromLocal);
    }

    if (!startDateFromLocal && !endDateFromLocal){
      return undefined;
    }
  
    return result;
  }

  onlyEndDateIsGiven(){
    return this.dateInput1.value === '' && this.dateInput2.value;
  }

}
export default Datepicker2Fields;