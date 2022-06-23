class CarouselBackground {

  constructor(carouselHtml) {
    this.carouselHtml = carouselHtml;
    this.itemsHtml = this.carouselHtml.querySelectorAll(".js-carousel-background__item");
    this.activeItem = 0;
    this.prevActive = 0;
   
    this.bindMethods();

    //setInterval(this.handleBtnForwardClick, 7000);
  }

  bindMethods() {
    this.handleBtnForwardClick = this.handleBtnForwardClick.bind(this);
  }

  handleBtnForwardClick(){
    this.prevActive = this.activeItem;
    this.activeItem ++;
    if (this.activeItem === this.itemsHtml.length){
      this.activeItem = 0;
    }

    this.moveItem();  
  }

  moveItem(){
    this.itemsHtml[this.prevActive].classList.remove('carousel-background__item_active');
    this.itemsHtml[this.activeItem].classList.add('carousel-background__item_active'); 
  }

}

export default CarouselBackground