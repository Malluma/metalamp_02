class Room {

  constructor(room) {

    this.room = room;
    this.carouselBtns = this.room.querySelectorAll('.js-carousel__btn');
    this.carousel = this.room.querySelector('.js-carousel')
    
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleRoomFocus = this.handleRoomFocus.bind(this);
    this.handleRoomFocusOut = this.handleRoomFocusOut.bind(this);
  }

  addEventListeners() {
    this.room.addEventListener('focusin', this.handleRoomFocus)
    this.room.addEventListener('focusout', this.handleRoomFocusOut)
  }

  handleRoomFocus(event){
    console.log('focus in: prev target')
    console.log(event.relatedTarget)

    this.carouselBtns.forEach((btn) => {
      btn.classList.add('carousel__btn_visible');
    })
    //this.carousel.tabindex = 0;
    //if (event.relatedTarget === this.carousel) {
    //  this.room.blur();
    //} else{
    //  this.carousel.focus();
    //}

    //this.room.tabindex = -1; //so that it is not focused the next time shift+tab pressed
    //console.log("focus event active")
    //console.log(document.activeElement)

  }

  handleRoomFocusOut(event){
    
    //console.log('handleRoomFocusOut')
    console.log('focus out: next target')
    console.log(event.relatedTarget)
    //console.log(document.activeElement)

   
    //this.carousel.blur();
    //
    //this.carousel.tabindex = -1;
    //console.log(document.activeElement)
   
    this.carouselBtns.forEach((btn) => {
      btn.classList.remove('carousel__btn_visible');
   })

   //event.target.blur();

   
  }

  //handleSectorEnterPress(event){
  //  if(event.key === "Enter"){
  //    this.handleSectorClick(event);
  //  }
  //}

}

export default Room