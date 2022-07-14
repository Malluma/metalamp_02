class Menu{
  
  constructor(menu) {

    this.menu = menu;
    this.list = menu.querySelector('.js-menu__list')
    this.expandBtns = menu.querySelectorAll('.js-menu__expand-btn');
    this.toggleBtn = menu.querySelector('.js-menu__toggle-btn');

    this.bindMethods();
    this.addEventListeners();
    
  }

  bindMethods(){
    this.handleExpandBtnClick = this.handleExpandBtnClick.bind(this);
    //this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleExpandableItemKeyUp = this.handleExpandableItemKeyUp.bind(this);
  }

  addEventListeners(){
    this.expandBtns.forEach((btn) => {
      btn.addEventListener("click", this.handleExpandBtnClick); 
      const listItem = btn.parentElement.parentElement;
      listItem.addEventListener("keyup", this.handleExpandableItemKeyUp);
    })

    //this.toggleBtn.addEventListener("click", this.handleToggleMenu);

  }
  

  //handleToggleMenu(){
  //  this.list.classList.toggle('menu__list_full-screen-open');
  //  this.toggleBtn.classList.toggle('menu__toggle-btn_full-screen-open');
  //}

  handleExpandBtnClick(e) {
    const submenuToggleBtn = e.target;
    this.toggleSubmenu(submenuToggleBtn);
  }

  toggleSubmenu(toggleBtn){
    const sublist = toggleBtn.parentElement.nextElementSibling;
    
    if(sublist.classList.contains("menu__sublist_hidden")){
      sublist.classList.remove("menu__sublist_hidden")
      setTimeout(() => {
        sublist.classList.remove("menu__sublist_unvisible");
          }, 20)
    } else {

      sublist.classList.add("menu__sublist_unvisible");
      setTimeout(() => {
        sublist.classList.add("menu__sublist_hidden")
          }, 400)
    }   
  }

  handleExpandableItemKeyUp(event){
    event.preventDefault();
    if(event.key === 'Enter'){
      const submenuToggleBtn = event.target.querySelector('.js-menu__expand-btn');
      this.toggleSubmenu(submenuToggleBtn);
    }
  }

}

export default Menu