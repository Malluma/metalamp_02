class Room {

  constructor(room) {

    this.room = room;
    this.carouselBtns = this.room.querySelectorAll('.js-carousel__btn');
    this.carousel = this.room.querySelector('.js-carousel');
    this.roomDescription = this.room.querySelector('.js-room__description'); 
    
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleRoomFocusIn = this.handleRoomFocusIn.bind(this);
    this.handleRoomFocusOut = this.handleRoomFocusOut.bind(this);
    this.handleRoomKeyUp = this.handleRoomKeyUp.bind(this);
    this.handleDescriptionClick = this.handleDescriptionClick.bind(this);
  }

  addEventListeners() {
    this.room.addEventListener('focusin', this.handleRoomFocusIn);
    this.room.addEventListener('focusout', this.handleRoomFocusOut);
    this.room.addEventListener('keyup', this.handleRoomKeyUp);
    this.roomDescription.addEventListener('click', this.handleDescriptionClick);
   }

  handleRoomFocusIn(event){

    this.carouselBtns.forEach((btn) => {
      btn.classList.add('carousel__btn_visible');
    })

  }

  handleRoomFocusOut(event){
  
    this.carouselBtns.forEach((btn) => {
      btn.classList.remove('carousel__btn_visible');
   })
   
  }

  handleRoomKeyUp(event){
    if(event.key === "Enter"){
      this.redirectToRoomDetailsPage(); 
    }
  }

  handleDescriptionClick(){
    this.redirectToRoomDetailsPage(); 
  }

  redirectToRoomDetailsPage(){
    window.location.href = './room-details.html';
  }

}

export default Room