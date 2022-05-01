class Rating {

  constructor(ratingHtml) {

    this.ratingHtml = ratingHtml;
    this.itemsHtml = this.ratingHtml.querySelectorAll('.js-rating__item');

    this.bindMethods();
    this.addEventListeners();

  }

  bindMethods() {
    this.handleMouseOverAndClickItem = this.handleMouseOverAndClickItem.bind(this);
    this.handleMouseOutItem = this.handleMouseOutItem.bind(this);
    this.setVisualRating = this.setVisualRating.bind(this);
  }

  addEventListeners() {
    this.itemsHtml.forEach(element => {
      element.addEventListener('mouseover', this.handleMouseOverAndClickItem);
      element.addEventListener('mouseout', this.handleMouseOutItem);
      element.addEventListener('click', this.handleMouseOverAndClickItem);
    });
  }

  handleMouseOverAndClickItem(e) {
    const eventItem = e.target;
    this.setVisualRating(eventItem);
  }

  handleMouseOutItem(e) {
    const checkedItem = this.ratingHtml.querySelector('.js-rating__item:checked');
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