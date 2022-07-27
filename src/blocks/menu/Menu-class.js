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
    this.handleItemHrefClick = this.handleItemHrefClick.bind(this);
    this.handleItemHrefKeyUp = this.handleItemHrefKeyUp.bind(this);
  }

  addEventListeners(){
    this.expandBtns.forEach((btn) => {
      btn.addEventListener("click", this.handleExpandBtnClick); 
      const itemHref = btn.parentElement;
      itemHref.addEventListener("click", this.handleItemHrefClick);
      const listItem = itemHref.parentElement;
      listItem.addEventListener("keyup", this.handleItemHrefKeyUp);
    })

  }
  
  handleExpandBtnClick(e) {
    const toggleBtn = e.target;
    const sublist = toggleBtn.parentElement.nextElementSibling;
    this.toggleSubmenu(sublist); 
  }

  handleItemHrefClick(e) {
    const itemHref = e.target;
    const sublist = itemHref.nextElementSibling;
    this.toggleSubmenu(sublist); 
  }

  toggleSubmenu(sublist){
    
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

  handleItemHrefKeyUp(event){
    event.preventDefault();
    if(event.key === 'Enter'){
      const submenuToggleBtn = event.target.querySelector('.js-menu__expand-btn');
      this.toggleSubmenu(submenuToggleBtn);
    }
  }

}

export default Menu