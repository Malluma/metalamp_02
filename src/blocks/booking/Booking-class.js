class Booking {

  constructor(bookingHtml) {
    this.bookingHtml = bookingHtml;
    const {price, discount, extraservicefee} = this.bookingHtml.dataset;
    this.price = formatStrToNumber(price);
    this.discount = formatStrToNumber(discount);
    this.extraServiceFee = formatStrToNumber(extraservicefee);
    this.date1Html = this.bookingHtml.querySelector(".js-date-dropdown__double-start");
    this.date2Html = this.bookingHtml.querySelector(".js-date-dropdown__double-end");
    this.costHtml = this.bookingHtml.querySelector(".js-booking__cost-sum");
    this.costCalcHtml = this.bookingHtml.querySelector(".js-booking__cost-calc");
    this.totalCostHtml = this.bookingHtml.querySelector(".js-booking__total-sum");
    
    this.bindMethods();
    this.addEventListeners();

    this.init();
  }

  bindMethods() {
    this.handleDateDropdownDoubleStartChange = this.handleDateDropdownDoubleStartChange.bind(this);
  }

  addEventListeners() {
    this.date1Html.addEventListener("change", this.handleDateDropdownDoubleStartChange)
  }

  init(){
    this.updateCost();
  }

  handleDateDropdownDoubleStartChange(e){
    this.updateCost();
  }

  updateCost(){

    const date1 = makeDateFromInputValue(this.date1Html.value);
    const date2 = makeDateFromInputValue(this.date2Html.value);
    const daysNumber = getDatesDiffInDays(date1, date2);
    const cost = daysNumber * this.price;
    const totalCost = cost - this.discount + this.extraServiceFee;

    this.costCalcHtml.textContent = `${formatNumberToStr(this.price)} x ${daysNumber} суток`;
    this.costHtml.textContent = formatNumberToStr(cost);
    this.totalCostHtml.textContent = formatNumberToStr(totalCost);

  }
}

function getDatesDiffInDays(date1, date2){
  return Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
}

//from '19.08.2019' to new Date('2019-08-19')
function makeDateFromInputValue(dateToFormat){
  const arr = dateToFormat.split('.');
  return new Date(`${arr[2]}-${arr[1]}-${arr[0]}`);
}

function formatNumberToStr(number){
  return `${new Intl.NumberFormat('ru-RU').format(number)}₽`;
}

function formatStrToNumber(strNumber){
  return Number(strNumber.replace(/\s/g, ''));
}

export default Booking;