import CheckboxList from './Checkbox-list-class';

const checkboxLists = document.querySelectorAll(".js-checkbox-list");

checkboxLists.forEach((checkboxList) => {

  const checkboxListInstance = new CheckboxList(checkboxList); 

})