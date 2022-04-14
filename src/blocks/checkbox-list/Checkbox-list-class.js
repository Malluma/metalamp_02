class CheckboxList{
  
  constructor(checkboxList) {

    this.list = checkboxList.querySelector('.js-checkbox-list__list');
    this.expandListBtn = checkboxList.querySelector('.js-checkbox-list__btn-expand');
    
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.expandListBtn.addEventListener("click", this.handleBtnClick); 
  }
  
  handleBtnClick() {
    this.expandListBtn.classList.toggle("checkbox-list__btn-expand-rotate");
    this.list.classList.toggle("checkbox-list__hidden");
  };

}

export default CheckboxList