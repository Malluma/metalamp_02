import Dropdown from './Dropdown-class';

const dropdowns = document.querySelectorAll(".js-dropdown");

dropdowns.forEach((dropdown) => {

  const dropdownInstance = new Dropdown(dropdown);

})