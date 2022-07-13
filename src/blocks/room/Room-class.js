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
    this.handleRoomFocus = this.handleRoomFocus.bind(this);
    this.handleRoomFocusOut = this.handleRoomFocusOut.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addEventListeners() {
    this.room.addEventListener('focusin', this.handleRoomFocus);
    this.room.addEventListener('focusout', this.handleRoomFocusOut);
    this.room.addEventListener('keyup', this.handleEnterPress);
    this.roomDescription.addEventListener('click', this.handleClick);
   }

  handleRoomFocus(event){

    this.carouselBtns.forEach((btn) => {
      btn.classList.add('carousel__btn_visible');
    })

  }

  handleRoomFocusOut(event){
  
    this.carouselBtns.forEach((btn) => {
      btn.classList.remove('carousel__btn_visible');
   })
   
  }

  handleEnterPress(event){
    if(event.key === "Enter"){
      this.redirectToRoomDetailsPage(); 
    }
  }

  handleClick(){
    console.log('click!')
    this.redirectToRoomDetailsPage(); 
  }

  redirectToRoomDetailsPage(){
    window.location.href = './room-details.html';
  }

}

export default Room