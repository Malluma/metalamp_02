import AirDatepicker from 'air-datepicker';
import {createAirDatepickerOptions, formatDateStr} from './utilityForDatepickerClasses';

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

        datepicker.hide();

      }
    }
  }

  createSelectedDatesArray(){

    const result = [];
    const inputValue = this.dateInput.dataset.value;
   
    if (inputValue){
      const [startDate, endDate] = inputValue.split('-');
      const startDateFromLocal = startDate ? formatDateStr(startDate) : '';
      const endDateFromLocal = endDate ? formatDateStr(endDate) : '';
    
      if (startDateFromLocal){
        result.push(new Date(startDateFromLocal));
      }
      if (endDateFromLocal){
        result.push(new Date(endDateFromLocal));
      }
    }
   
    return result;
  }

  getDateFormatOptionForPluginCalendar(){

    function dateFormat(date){

      function formatSingleDate(dateToFormat){
        let resultDate = dateToFormat ? dateToFormat.toLocaleDateString('ru-RU', options) : '';
        const lastSymbolIsDot = resultDate.length > 1 && resultDate[resultDate.length-1] === '.';
        if (lastSymbolIsDot){
          resultDate = resultDate.slice(0, -1);  
        }
        return resultDate;
      }

      const options = {month: 'short', day: 'numeric'};
      let [startDate, endDate] = date;
      
      const startDateFormat = formatSingleDate(startDate);
      const endDateFormat = formatSingleDate(endDate);
      
      return `${startDateFormat} - ${endDateFormat}`  
     
    }

    return dateFormat;

  }

}

export default Datepicker1Field;