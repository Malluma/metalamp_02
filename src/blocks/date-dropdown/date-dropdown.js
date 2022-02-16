import AirDatepicker from 'air-datepicker';

let applyBtn = {
  content: 'применить',
  className: 'js-date-dropdown__applyBtn',
  onClick: (dp) => {
      console.log('APPLY BTN!!');
  }
}


const calendar = new AirDatepicker(('.js-date-dropdown__1'), {
  multipleDates: true,
  buttons: ['clear', applyBtn],
  range: true,
  dynamicRange: true
  ,onSelect({date, formattedDate, datepicker}){
    const selectedDate = document.querySelector(".-range-from-");
    if(date.length === 1 && selectedDate.classList.contains('-focus-')){
      //selectedDate.classList.add("-range-from-to-delete-before-after")
    }else{
      //selectedDate.classList.remove("-range-from-to-delete-before-after")
    }
  }
    
})


