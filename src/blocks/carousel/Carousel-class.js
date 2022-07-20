class Carousel {

  constructor(carouselHtml) {
    this.carouselHtml = carouselHtml;
    this.itemsHtml = this.carouselHtml.querySelectorAll(".js-carousel__item");
    this.trackItemsHtml = this.carouselHtml.querySelectorAll(".js-carousel__track-item");
    this.btnBack = this.carouselHtml.querySelector(".js-carousel__btn-back");
    this.btnForward = this.carouselHtml.querySelector(".js-carousel__btn-forward");
    this.itemWidth = this.carouselHtml.offsetWidth;
    this.activeItem = 0;
    this.prevActive = 0;
    
    this.bindMethods();
    this.addEventListeners();
   
    if (this.carouselHtml.dataset.autoimageschange === "true"){
      setInterval(this.handleBtnForwardClick, 7000);
    }
  
  }

  bindMethods() {
    this.handleBtnBackClick = this.handleBtnBackClick.bind(this);
    this.handleBtnForwardClick = this.handleBtnForwardClick.bind(this);
    this.handleCarouselKeyUp = this.handleCarouselKeyUp.bind(this);
  }

  addEventListeners() {
    this.btnBack.addEventListener("click", this.handleBtnBackClick);
    this.btnForward.addEventListener("click", this.handleBtnForwardClick);
    this.carouselHtml.addEventListener("keyup", this.handleCarouselKeyUp);
  }

  handleBtnForwardClick(){
    this.prevActive = this.activeItem;
    this.activeItem ++;
    if (this.activeItem === this.itemsHtml.length){
      this.activeItem = 0;
    }

    this.moveItem();  
    this.updateTrack();
  }

  handleBtnBackClick(){
    this.prevActive = this.activeItem;

    this.activeItem --
    if (this.activeItem < 0){
      this.activeItem = this.itemsHtml.length - 1;
    }
   
    this.moveItem();
    this.updateTrack();
  }

  moveItem(){
    this.itemsHtml[this.prevActive].classList.remove('carousel__item_active');
    this.itemsHtml[this.activeItem].classList.add('carousel__item_active'); 
  }

  updateTrack(){
    if (this.trackItemsHtml.length > 0){
      this.trackItemsHtml[this.prevActive].classList.remove('carousel__track-item_active');
      this.trackItemsHtml[this.activeItem].classList.add('carousel__track-item_active');
    }
  }

  handleCarouselKeyUp(event){

    if(event.key === 'ArrowLeft'){
      this.handleBtnBackClick();
    } else if (event.key === 'ArrowRight'){
      this.handleBtnForwardClick();
    }
  }

}

export default Carousel