import AirDatepicker from 'air-datepicker';
import {createAirDatepickerOptions, onSelectAirDP} from './utilityForDatepickerClasses';

class Datepicker2Fields {

  constructor(options) {

    console.log(`START CLASS CONSTRUCTOR ${options.id}`);
    this.dateInput1 = options.startDateInput;
    this.dateInput2 = options.endDateInput;
    //this.onlySecondDate = false;
    //this.firstStart = true;

    this.airDatepicker = new AirDatepicker(`.${options.id}`,
      createAirDatepickerOptions(this.createClearBtn(), this.createApplyBtn(), this));

    if (this.airDatepicker.selectedDates.length === 1) {
      this.airDatepicker.setFocusDate(this.airDatepicker.selectedDates[0]);
      if (this.dateInput2) {
        this.onlySecondDate = true;
      } 

    }

    
    if(this.dateInput1.value && this.dateInput2.value) {
      console.log('class constructor airDatepicker.selectedDates 1')
      console.log(this.airDatepicker.selectedDates)
      console.log(`this.dateInput1.value: ${this.dateInput1.value} this.dateInput2.value: ${this.dateInput2.value}`)
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
      console.log('class constructor airDatepicker.selectedDates 2')
      console.log(this.airDatepicker.selectedDates)
      console.log(`this.dateInput1.value: ${this.dateInput1.value} this.dateInput2.value: ${this.dateInput2.value}`)

    }
  

    
    this.handleDate2Click = this.handleDate2Click.bind(this);
    this.dateInput2.addEventListener('click', this.handleDate2Click)

    //this.firstStart = false;
    console.log(`END CLASS CONSTRUCTOR ${options.id}`)
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
        //console.log(`start date: ${startDate} end date: ${endDate}`)
        if (startDate){
          this.dateInput1.value = startDate.toLocaleDateString();
        }
        if (endDate) {
          this.dateInput2.value = endDate.toLocaleDateString();
        }
        datepicker.hide();
      }
    }
  }

  handleDate2Click(){
    this.airDatepicker.show();
  }

}
export default Datepicker2Fields;