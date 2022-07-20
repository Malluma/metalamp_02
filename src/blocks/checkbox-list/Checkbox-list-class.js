class CheckboxList{
  
  constructor(checkboxList) {

    this.list = checkboxList.querySelector('.js-checkbox-list__list');
    this.expandListBtn = checkboxList.querySelector('.js-checkbox-list__btn-expand');
    this.listLabel = checkboxList.querySelector('.js-checkbox-list__label-flex-wrap');

    this.bindMethods();
    this.addEventListeners();

  }
  
  bindMethods(){
    this.handleBtnExpandClick = this.handleBtnExpandClick.bind(this);
    this.handleListLabelClick = this.handleListLabelClick.bind(this);
  }

  addEventListeners(){
    this.expandListBtn.addEventListener('click', this.handleBtnExpandClick); 
    this.listLabel.addEventListener('keyup', this.handleListLabelClick);
  }

  handleBtnExpandClick() {
    this.expandListBtn.classList.toggle('checkbox-list__btn-expand-rotate');
    this.list.classList.toggle('checkbox-list__hidden');
  };

  handleListLabelClick(event){
    event.preventDefault();
    if(event.key === 'Enter'){
      this.handleBtnExpandClick();
    }
  }

}

export default CheckboxList