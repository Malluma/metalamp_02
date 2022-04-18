import AirDatepicker from 'air-datepicker';
import {createAirDatepickerOptions} from './utilityForDatepickerClasses';

class Datepicker1Field {

  constructor(options) {
    this.dateInput = options.startEndDateInput;
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
    this.dateInput.value = '';
  }

  createApplyBtn() {
    return {
      content: 'применить',
      className: 'js-date-dropdown__applyBtn',
      onClick: (datepicker) => {
        let [startDate, endDate] = datepicker.selectedDates;
        const options = {
          month: 'short',
          day: 'numeric'
        };
        startDate = startDate.toLocaleDateString('ru-RU', options).slice(0, -1);
        endDate = endDate.toLocaleDateString('ru-RU', options).slice(0, -1)

        this.dateInput.value = `${startDate} - ${endDate}`;
        datepicker.hide();
      }
    }
  }

}

export default Datepicker1Field;