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
    
    function updateDropdownText(numStr){
    
      const lastDigit = numStr.substring(numStr.length - 1);
      const twoLastDigits = numStr.substring(numStr.length - 2);
      const declension = JSON.parse(input.dataset.declension)
      
      //окончание на 1 (но не 11) - гость
      //окончание на 2,3,4 ( но не 12,13,14) - гостя
      //окончание на 0 5 6 7 8 9 - гостей
      //окончание на 11, 12, 13, 14 - гостей
      console.log(lastDigit);
      console.log(twoLastDigits);
      if (twoLastDigits === "11" || twoLastDigits === "12" || twoLastDigits === "13" || twoLastDigits === "14" ||
         lastDigit === "0" || lastDigit === "5" || lastDigit === "6" || lastDigit === "7" || lastDigit === "8" || lastDigit === "9") {
        input.value = `${numStr} ${declension[2]}` 
      }
      else if(lastDigit === "2" || lastDigit === "3" || lastDigit === "4"){
        input.value = `${numStr} ${declension[1]}` 
      }
      else{
        input.value = `${numStr} ${declension[0]}`
      }

    }

    function changeNumber(e){
      
      console.log('changeNumber')
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

      updateDropdownText(numberElem.textContent)

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