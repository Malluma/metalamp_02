import AirDatepicker from 'air-datepicker';
import {createAirDatepickerOptions, formatDateStr} from './utilityForDatepickerClasses';

class Datepicker1Field {

  constructor(options) {
  
    this.dateInput = options.startEndDateInput;
    this.dateInputValue = this.dateInput.dataset.value;
    this.alwaysShow = this.dateInput.dataset.alwaysshow === "true" ? true : false;
    this.setPrevInputDates();
    this.dontSetInputDatesFromPrevDates = false;
    
    this.dateInput.classList.add(options.id);

    if (this.alwaysShow){
      this.hideInput(); 
    }
  
    this.airDatepicker = new AirDatepicker(`.${options.id}`, 
    createAirDatepickerOptions(this.createClearBtn(), this.createApplyBtn(), this, this.alwaysShow));
    
    this.bindMethods();
    this.addEventListeners();

  }

  bindMethods(){
    this.handleApplyBtnClick = this.handleApplyBtnClick.bind(this);
    this.handleKeyboardApplyBtnClick = this.handleKeyboardApplyBtnClick.bind(this);
  }
  addEventListeners(){
    this.dateInput.addEventListener("keydown", this.handleKeyboardApplyBtnClick);
  }

  handleKeyboardApplyBtnClick(event){
    event.preventDefault();
    if(event.key === "Tab" && this.bothDatesSelected()){
      this.handleApplyBtnClick(this.airDatepicker)
    }
  }

  hideInput(){
    this.dateInput.classList.add('date-dropdown__input-hidden');
    this.dateInput.nextElementSibling.classList.add('date-dropdown__input-hidden');
  }

  setPrevInputDates(){
    const [startDate, endDate] = this.dateInputValue.split('-');
    this.prevDate1 = startDate ? startDate : '';
    this.prevDate2 = endDate ? endDate: '';
  }

  setInputDatesFromPrev(){
    this.dateInputValue = `${this.prevDate1}-${this.prevDate2}`;
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
        this.handleApplyBtnClick(datepicker)
      }
    }
  }

  handleApplyBtnClick(datepicker){
    this.setNewDateValues(datepicker);
    this.setPrevInputDates();
    //to help to catch date change in other blocks
    this.dateInput.dispatchEvent(new Event('change')); 
    this.dontSetInputDatesFromPrevDates = true;  
    datepicker.hide();
  }

  bothDatesSelected(){
    let [startDate, endDate] = this.airDatepicker.selectedDates;
    return startDate && endDate
  }
  
  setNewDateValues(pluginDP){
    let [startDate, endDate] = pluginDP.selectedDates;
        
    if (startDate){
      startDate = startDate.toLocaleDateString();
    }else{
      startDate = '';
    }

    if (endDate) {
      endDate = endDate.toLocaleDateString();
    }else{
      endDate = '';
    }

    this.dateInputValue = `${startDate}-${endDate}`;
  }

  createSelectedDatesArray(){
    
    const result = [];
    const inputValue = this.dateInputValue;
   
    if (inputValue){
      const [startDate, endDate] = inputValue.split('-');
      this.pushDateIntoArray(startDate, result);
      this.pushDateIntoArray(endDate, result);
    }
   
    return result;
  }

  pushDateIntoArray(date, arr){
    const dateFormat = date ? formatDateStr(date) : '';
    if (dateFormat){
      arr.push(new Date(dateFormat));
    }
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