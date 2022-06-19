import './like-btn.scss';

import LikeBtn from './Like-btn-class';

const likeBtns = document.querySelectorAll(".js-like-btn");

likeBtns.forEach((likeBtnHtml) => {

  const likeBtnInstance = new LikeBtn(likeBtnHtml); 

})