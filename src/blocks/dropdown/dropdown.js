import Dropdown from './Dropdown';

const dropdowns = document.querySelectorAll(".js-dropdown");

dropdowns.forEach((dropdown) => {

  const list = dropdown.querySelector(".js-dropdown__list");
  const expandBtn = dropdown.querySelector(".js-dropdown__expand-btn");
  const input = dropdown.querySelector(".js-dropdown__input");
  const plusBtns = dropdown.querySelectorAll(".js-dropdown__plus-btn");
  const numberElems = dropdown.querySelectorAll(".js-dropdown__number");
  const minusBtns = dropdown.querySelectorAll(".js-dropdown__minus-btn");
  const applyBtn = dropdown.querySelector('.js-dropdown__apply-btn');
  const cleanBtn = dropdown.querySelector('.js-dropdown__clean-btn');

  const dropdownInstance = new Dropdown(list, expandBtn, input, plusBtns, numberElems, minusBtns, applyBtn, cleanBtn);

})