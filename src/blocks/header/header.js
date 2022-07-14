import './header.scss';

import '../../blocks/button/button';
import '../../blocks/menu/menu';

import Header from './Header-class';

const headers = document.querySelectorAll(".js-header");

headers.forEach((header) => {
  const headerInstance = new Header(header); 
})