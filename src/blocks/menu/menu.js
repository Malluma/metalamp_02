import './menu.scss'

import Menu from './Menu-class';

const menus = document.querySelectorAll(".js-menu");

menus.forEach((menu) => {
  const menuInstance = new Menu(menu); 
})