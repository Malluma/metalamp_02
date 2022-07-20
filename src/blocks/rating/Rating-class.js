class Rating {

  constructor(ratingHtml) {

    this.ratingHtml = ratingHtml;
    this.itemsHtml = this.ratingHtml.querySelectorAll('.js-rating__item');
    
    if (ratingHtml.dataset.canbeedited === 'true'){
      this.bindMethods();
      this.addEventListeners();
    }

  }

  bindMethods() {
    this.handleItemMouseOverClick = this.handleItemMouseOverClick.bind(this);
    this.handleItemMouseOut = this.handleItemMouseOut.bind(this);
    this.setVisualRating = this.setVisualRating.bind(this);
  }

  addEventListeners() {
    this.itemsHtml.forEach(element => {
      element.addEventListener('mouseover', this.handleItemMouseOverClick);
      element.addEventListener('mouseout', this.handleItemMouseOut);
      element.addEventListener('click', this.handleItemMouseOverClick);
    });
  }

  handleItemMouseOverClick(e) {
    const eventItem = e.target;
    this.setVisualRating(eventItem);
  }

  handleItemMouseOut(e) {
    const checkedItem = this.ratingHtml.querySelector('.js-rating__item:checked');
    console.log(checkedItem)
    this.setVisualRating(checkedItem);
  }

  setVisualRating(checkedItem) {

    const checkedItemNum = Number(checkedItem.value);

    this.itemsHtml.forEach(element => {
      if (element.value <= checkedItemNum) {
        element.classList.add('icon-star');
        element.classList.remove('icon-star_border');
      } else {
        element.classList.remove('icon-star');
        element.classList.add('icon-star_border');
      }
    });

  }

}

export default Rating;