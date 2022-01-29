function dropdown({ arrowToggle = false }) {
  const selector = document.querySelectorAll('.js-dropdown');

  selector.forEach((item, index) => {
    const input = item.querySelector('.js-dropdown__input');
    const arrowBtn = item.querySelector('.js-dropdown__arrow-btn');

  })
  
  // функция открытия/закрытия dropdown
  function toggleDropdown(expand=true) {

    if (expand) {
      //const listItem = document.createElement()
    }


  };

  arrowBtn.addEventListener('click', toggleDropdown);
}

export default dropdown;