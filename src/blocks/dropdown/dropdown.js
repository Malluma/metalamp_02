function initDropdown() {

  const dropdowns = document.querySelectorAll('.js-dropdown');

  dropdowns.forEach((dropdown) => {
    const arrowBtn  = dropdown.querySelector('.js-dropdown__arrow-btn'); 
    const list      = dropdown.querySelector('.js-dropdown__list');
    const input     = dropdown.querySelector('.js-dropdown__input');                                                                               
    const plusBtns  = dropdown.querySelectorAll('.js-dropdown__plus-btn');
    const minusBtns = dropdown.querySelectorAll('.js-dropdown__minus-btn');
    const number    = dropdown.querySelector('js-dropdown__number');
  
  
    function toggleDropdown() {
      list.classList.toggle('dropdown__list_is-hidden');
    };
    
    function changeNumber(e){
      
      let numberElem;
      let number;
      let btnMinus;

      if (e.target.textContent === '+') {
        numberElem = e.target.previousElementSibling;
        btnMinus = numberElem.previousElementSibling;
        number = Number(numberElem.textContent);
        numberElem.textContent = number + 1;
        btnMinus.disabled = false;
      } else {
        numberElem = e.target.nextElementSibling;
        number = Number(numberElem.textContent);
        numberElem.textContent = number - 1;
        e.target.disabled = numberElem.textContent === '0';
      }


    }

    arrowBtn.addEventListener('click', toggleDropdown);
    plusBtns.forEach((plusBtn, index) => {
      plusBtn.addEventListener('click', changeNumber);
    })
    minusBtns.forEach((minusBtn, index) => {
      minusBtn.addEventListener('click', changeNumber);
    })

  })//forEach dropdown
 
}

export default initDropdown;