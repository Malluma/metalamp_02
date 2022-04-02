import CheckboxList from './CheckboxList';

const checkboxLists = document.querySelectorAll(".js-checkbox-list");

checkboxLists.forEach((checkboxList) => {

  const list = checkboxList.querySelector('.js-checkbox-list__list');
  const btn = checkboxList.querySelector('.js-checkbox-list__btn-expand');
  
  const checkboxListInstance = new CheckboxList(list, btn); 

})