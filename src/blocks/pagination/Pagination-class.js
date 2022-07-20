class Pagination {

  constructor(paginationHtml, pagesAmount, itemsTotalAmount, itemsOnPage) {
    this.listHtml = paginationHtml.querySelector('.js-pagination__list');
    this.descriptionHtml = paginationHtml.querySelector('.js-pagination__description');
    this.pagesAmount = pagesAmount;
    this.itemsTotalAmount = itemsTotalAmount;
    this.itemsOnPage = itemsOnPage;
    this.paginationItems = [];
    this.activeItem = 0;

    this.bindMethods();
    this.createPaginationList();
    this.addEventListeners();

  }

  bindMethods() {
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleItemKeyUp = this.handleItemKeyUp.bind(this);
  }

  addEventListeners() {
    this.paginationItems.forEach((item) => {
      item.addEventListener("click", this.handleItemClick);
      item.addEventListener("keyup", this.handleItemKeyUp);
    })
  }

  handleItemKeyUp(event){
    event.preventDefault();
    if(event.key === 'Enter'){
      this.handleItemClick(event);
    }
  }

  getPageValue(index){
    if (this.paginationItems.length > index){
      return Number(this.paginationItems[index].textContent);
    }else{
      return 1;
    }
  }

  createPaginationList() {

    const activeItemValue = this.getPageValue(this.activeItem);
    this.clearList();
    
    if (this.pagesAmount === 0){
      return;
    }

    const lastItem = this.pagesAmount;
    this.createListItem({text: activeItemValue, active: true});
    
    if(activeItemValue === 1){
      let i = 0;
      for (i=2; i<4 && i<=lastItem; i++){
        this.createListItem({text: i});
      }
      this.addEllipsisAndLastNumber(lastItem, 'end', i-1);

    }else if (activeItemValue === lastItem){
      let i = 0;
      for (let i=lastItem-1; i>=lastItem-2 && i>0; i--){
        this.createListItem({text: i, insert: 'begining'});
      }  
      this.addEllipsisAndLastNumber(1, 'begining', i-1);

    }else{

      const firstGroupNum = activeItemValue-1;
      const lastGroupNum = activeItemValue+1;
      this.createListItem({text: firstGroupNum, insert: 'begining'});
      this.createListItem({text: lastGroupNum, insert: 'end'});
      this.addEllipsisAndLastNumber(lastItem, 'end', lastGroupNum);
      this.addEllipsisAndLastNumber(1, 'begining', firstGroupNum);

    }

    //btns
    if (activeItemValue !== 1){
      this.createListItem({btn: 'prev', insert: 'begining'});
    }
    if (activeItemValue !== lastItem){
      this.createListItem({btn: 'next'});
    }

    this.numberItemsAndInsertIntoHtml(activeItemValue);
    this.addEventListeners();
    this.updateDescription();
    
  }

  addEllipsisAndLastNumber(lastNum, insert, lastGroupNum){
    const diff = Math.abs((lastGroupNum - lastNum));
    if (diff === 1) {//add 4th number without ellipsis
      this.createListItem({text: lastNum, insert: insert});
    }else if (diff > 1) {
      this.createListItem({text: '...', insert: insert});
      this.createListItem({text: lastNum, insert: insert});
    }
  }

  clearList(){
    this.paginationItems = [];
    while (this.listHtml.firstChild) {
      this.listHtml.firstChild.remove();
    }
  }

  createListItem(options) {

    const {text, active, btn, insert} = options;

    const newPageItem = document.createElement('li');
    newPageItem.className = this.generateClassNamesForListItem(active, btn);
    newPageItem.tabIndex = 0;
    newPageItem.textContent = text;
  
    if (insert === 'begining') {
      this.paginationItems.unshift(newPageItem);
    }else {
      this.paginationItems.push(newPageItem);
    }

  }

  numberItemsAndInsertIntoHtml(activeItemValue){
    this.paginationItems.forEach((item, index) => {
      item.value = index;
      this.listHtml.appendChild(item);

      if (item.textContent === String(activeItemValue)) {
        this.activeItem = item.value;
      }
    })
  }

  generateClassNamesForListItem(active, btn){
    
    const activeClass = active?'pagination__item_active':'';
    const nextPrevBtnBasicClass = 'pagination__item_next-prev-btn';
    let nextPrevBtnClass = '';

    if (btn){
      if (btn === 'next'){
        nextPrevBtnClass = `${nextPrevBtnBasicClass} icon-arrow_forward`;
      }else{
        nextPrevBtnClass = `${nextPrevBtnBasicClass} icon-arrow_back`
      }
    }

    return `pagination__item ${activeClass} ${nextPrevBtnClass}`; 
  }

  handleItemClick(e) {
    const currentPageItem = e.target;
    if (currentPageItem.classList.contains('icon-arrow_forward')){
      const nextItem = this.paginationItems[this.activeItem+1];
      this.moveActivePage(nextItem);
    }
    else if (currentPageItem.classList.contains('icon-arrow_back')){
      const prevItem = this.paginationItems[this.activeItem-1];
      this.moveActivePage(prevItem);
    }else if (currentPageItem.textContent !== '...') {
      this.moveActivePage(currentPageItem);
    }
  }

  moveActivePage(currentPageItem){
    this.paginationItems[this.activeItem].classList.remove('pagination__item_active');
    currentPageItem.classList.add('pagination__item_active');
    this.activeItem = currentPageItem.value;

    this.createPaginationList();
  }

  updateDescription(){
    const activePage = this.getPageValue(this.activeItem);
    const itemsOnPageFrom = 12 * (activePage-1) + 1;
    const itemsOnPageTo = 12 * activePage;
    const itemsTotalAmountTxt = this.itemsTotalAmount > 100 ? '100+': this.itemsTotalAmount;
    this.descriptionHtml.textContent = `${itemsOnPageFrom} – ${itemsOnPageTo} из ${itemsTotalAmountTxt} вариантов аренды`;
  }

}

export default Pagination