class CheckboxList{
  
  constructor(list, btn) {
    this.list = list;
    this.expandListBtn = btn;
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.expandListBtn.addEventListener("click", this.handleBtnClick); 
  }
  
  handleBtnClick() {
    this.expandListBtn.classList.toggle("checkbox-list__btn-expand-rotate");
    this.list.classList.toggle("checkbox-list__hidden");
  };

}

export default CheckboxList