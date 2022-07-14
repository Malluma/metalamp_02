class Header{
  
  constructor(header) {

    this.header = header;
    this.menuContainer = header.querySelector('.js-header__menu-container');
    this.burgerBtn = header.querySelector('.js-header__burger-btn');

    this.bindMethods();
    this.addEventListeners();
    
  }

  bindMethods(){
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  addEventListeners(){
    this.burgerBtn.addEventListener("click", this.handleToggleMenu);
  }
  

  handleToggleMenu(){
    this.menuContainer.classList.toggle('header__menu-container_mobile');
  }
}

export default Header
