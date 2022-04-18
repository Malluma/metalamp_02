import AirDatepicker from 'air-datepicker';
import {createAirDatepickerOptions} from './utilityForDatepickerClasses';

class Datepicker2Fields {

  constructor(options) {

    this.dateInput1 = options.startDateInput;
    this.dateInput2 = options.endDateInput;
    this.airDatepicker = new AirDatepicker(`.${options.id}`,
      createAirDatepickerOptions(this.createClearBtn(), this.createApplyBtn(), this));
    this.handleDate2Click = this.handleDate2Click.bind(this);
    this.dateInput2.addEventListener('click', this.handleDate2Click)

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
        this.dateInput1.value = startDate.toLocaleDateString();
        this.dateInput2.value = endDate.toLocaleDateString();
        datepicker.hide();
      }
    }
  }

  handleDate2Click(){
    this.airDatepicker.show();
  }

}
export default Datepicker2Fields;