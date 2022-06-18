class Carousel {

  constructor(carouselHtml) {
    this.carouselHtml = carouselHtml;
    this.itemsHtml = this.carouselHtml.querySelectorAll(".js-carousel__item");
    this.trackItemsHtml = this.carouselHtml.querySelectorAll(".js-carousel__track-item");
    this.btnBack = this.carouselHtml.querySelector(".js-carousel__btn-back");
    this.btnForward = this.carouselHtml.querySelector(".js-carousel__btn-forward");
    this.itemWidth = this.carouselHtml.clientWidth;
    this.activeItem = 0;
   
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleBtnBackClick = this.handleBtnBackClick.bind(this);
    this.handleBtnForwardClick = this.handleBtnForwardClick.bind(this);
  }

  addEventListeners() {
    this.btnBack.addEventListener("click", this.handleBtnBackClick);
    this.btnForward.addEventListener("click", this.handleBtnForwardClick);
  }

  handleBtnBackClick(){
    const prevActive = this.activeItem;

    this.activeItem --
    if (this.activeItem < 0){
      this.activeItem = this.itemsHtml.length - 1;
    }
   
    this.moveItem();
    this.updateTrack(prevActive);
  }

  handleBtnForwardClick(){
    const prevActive = this.activeItem;

    this.activeItem ++
    if (this.activeItem === this.itemsHtml.length){
      this.activeItem = 0;
    }

    this.moveItem();  
    this.updateTrack(prevActive);
  }

  moveItem(){
    this.itemsHtml.forEach((item) => {
      item.style.transform = `translateX( ${- this.itemWidth * this.activeItem}px)`;  
      })
  }

  updateTrack(prevActive){
    this.trackItemsHtml[prevActive].classList.remove('carousel__track-item_active');
    this.trackItemsHtml[this.activeItem].classList.add('carousel__track-item_active');
  }

}

export default Carousel