class LikeBtn{
  
  constructor(likeBtnHtml) {

    this.likeBtnHtml = likeBtnHtml;
    this.likesNumber = this.likeBtnHtml.querySelector('.js-like-btn__number');
    this.icon = this.likeBtnHtml.querySelector('.js-like-btn__icon');
    this.initiallyLikedByCurrentUser = this.likeBtnHtml.dataset.liked === 'true' ? true : false;
    const likesNumber = Number(this.likesNumber.textContent);
    this.likesNumberWithoutCurrentUser =  this.initiallyLikedByCurrentUser ? likesNumber - 1 : likesNumber;
   
    this.bindMethods();
    this.addEventListeners();

  }
  
  bindMethods(){
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleKeyboardToggleClick = this.handleKeyboardToggleClick.bind(this);
  }

  addEventListeners(){
    this.likeBtnHtml.addEventListener('click', this.handleBtnClick); 
    this.likeBtnHtml.addEventListener('keyup', this.handleKeyboardToggleClick);
  }

  handleBtnClick() {
    this.toggleLikesNumber();
    this.toggleVisualLikedStatus();
  };

  toggleLikesNumber(){
    const currentlikesNumber = Number(this.likesNumber.textContent);
    let newLikesNumber = 0;

    if (this.likesNumberWithoutCurrentUser === currentlikesNumber) {
      newLikesNumber = currentlikesNumber + 1;
    } else {
      newLikesNumber = currentlikesNumber - 1;
    }

    this.likesNumber.textContent = newLikesNumber;
  }

  toggleVisualLikedStatus(){
    this.likeBtnHtml.classList.toggle('like-btn_border_unactive');
    this.icon.classList.toggle('like-btn__icon_unactive');
    this.icon.classList.toggle('icon-favorite');
    this.icon.classList.toggle('icon-favorite_border');
  }

  handleKeyboardToggleClick(event){
    event.preventDefault();
    if(event.key === 'Enter'){
      this.handleBtnClick();
    }
  }

}

export default LikeBtn