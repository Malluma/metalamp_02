import Dropdown from './Dropdown-class';

import './dropdown.scss';

const dropdowns = document.querySelectorAll('.js-dropdown');

dropdowns.forEach((dropdown) => {

  const dropdownInstance = new Dropdown(dropdown);

})