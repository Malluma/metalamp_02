class CheckboxList{
  
  constructor(checkboxList) {

    this.list = checkboxList.querySelector('.js-checkbox-list__list');
    this.expandListBtn = checkboxList.querySelector('.js-checkbox-list__btn-expand');
    this.listLabel = checkboxList.querySelector('.js-checkbox-list__label-flex-wrap');

    this.bindMethods();
    this.addEventListeners();

  }
  
  bindMethods(){
    this.handleListLabelClick = this.handleListLabelClick.bind(this);
    this.handleListLabelKeyUp = this.handleListLabelKeyUp.bind(this);
  }

  addEventListeners(){
    this.listLabel.addEventListener('click', this.handleListLabelClick); 
    this.listLabel.addEventListener('keyup', this.handleListLabelKeyUp);
  }

  handleListLabelClick() {
    this.toggleList();
  };

  toggleList(){
    this.expandListBtn.classList.toggle('checkbox-list__btn-expand-rotate');
    this.list.classList.toggle('checkbox-list__hidden');
  }

  handleListLabelKeyUp(event){
    event.preventDefault();
    if(event.key === 'Enter'){
      this.handleBtnExpandClick();
    }
  }

}

export default CheckboxList