import AirDatepicker from 'air-datepicker';
import {createAirDatepickerOptions} from './utilityForDatepickerClasses';

class Datepicker2Fields {

  constructor(options) {

    this.DateInput1 = options.startDateInput;
    this.DateInput2 = options.endDateInput;
    this.airDatepicker = new AirDatepicker(`.${options.id}`,
      createAirDatepickerOptions(this.createClearBtn(), this.createApplyBtn(), this));

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
    this.DateInput1.value = '';
    this.DateInput2.value = '';
  }

  createApplyBtn() {
    return {
      content: 'применить',
      className: 'js-date-dropdown__applyBtn',
      onClick: (datepicker) => {
        const [startDate, endDate] = datepicker.selectedDates;
        this.DateInput1.value = startDate.toLocaleDateString();
        this.DateInput2.value = endDate.toLocaleDateString();
        datepicker.hide();
      }
    }
  }

}
export default Datepicker2Fields;