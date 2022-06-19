class CheckboxList{
  
  constructor(checkboxList) {

    this.list = checkboxList.querySelector('.js-checkbox-list__list');
    this.expandListBtn = checkboxList.querySelector('.js-checkbox-list__btn-expand');
    this.listLabel = checkboxList.querySelector('.js-checkbox-list__label-flex-wrap');

    this.bindMethods();
    this.addEventListeners();

  }
  
  bindMethods(){
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleKeyboardToggleClick = this.handleKeyboardToggleClick.bind(this);
  }

  addEventListeners(){
    this.expandListBtn.addEventListener('click', this.handleBtnClick); 
    this.listLabel.addEventListener('keyup', this.handleKeyboardToggleClick);
  }

  handleBtnClick() {
    this.expandListBtn.classList.toggle('checkbox-list__btn-expand-rotate');
    this.list.classList.toggle('checkbox-list__hidden');
  };

  handleKeyboardToggleClick(event){
    event.preventDefault();
    if(event.key === 'Enter'){
      this.handleBtnClick();
    }
  }

}

export default CheckboxList