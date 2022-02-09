function initDropdown() {

  const dropdowns = document.querySelectorAll(".js-dropdown");

  dropdowns.forEach((dropdown) => {

    const arrowBtn  = dropdown.querySelector(".js-dropdown__arrow-btn"); 
    const list      = dropdown.querySelector(".js-dropdown__list");
    const input     = dropdown.querySelector(".js-dropdown__input");                                                                             
    const plusBtns  = dropdown.querySelectorAll(".js-dropdown__plus-btn");
    const minusBtns = dropdown.querySelectorAll(".js-dropdown__minus-btn");
    const cleanBtn = dropdown.querySelector(".js-dropdown__clean-btn");
    const applyBtn = dropdown.querySelector(".js-dropdown__apply-btn"); 
    const numberElems = dropdown.querySelectorAll(".js-dropdown__number");
    
    const initValue = input.value; 
    const groupedListArray = []
    createGroupedListArray()
    console.log(numberElems)

    function createGroupedListArray(){
      
      //создаем сгруппированный массив списка dropboxа: например 
      //массив [{name: "Взрослые", number: 2, declensions: ["гость", "гостя", "гостей"]},
      //        {name: "Дети", number: 1, declensions: ["гость", "гостя", "гостей"]},
      //        {name: "Младенцы", number: 1, declensions: ["младенец", "младенца", "младенцев"]}]
      //преобразуется в массив
      //            [{key: "гость", number: 3, declensions: ["гость", "гостя", "гостей"]},         
      //             {key: "младенец", number: 1, declensions: ["младенец", "младенца", "младенцев"]}]
      //по этому массиву подсчитываем сгруппированное количество (number) и формируем текст инпута каждый раз при нажатии кнопок + и -,
      // например: "3 гостей, 1 младенец"
      const listArray = JSON.parse(list.dataset.list);//все пункты списка с количеством и склонениями

      for (const el of listArray) {
        const elementInGroupedArray = groupedListArray.find((elGrouped)=> elGrouped.key === el.declensions[0]) 
        if (elementInGroupedArray) {
          elementInGroupedArray.number =  elementInGroupedArray.number + Number(el.number);
        } 
        else{
          groupedListArray.push({key: el.declensions[0], number: Number(el.number), declensions: [...el.declensions]})
        }
      }
    }

    function cleanGroupedListArray(){

      for (const el of groupedListArray) {
        el.number = 0;
      }

    }

    function toggleDropdown() {
      list.classList.toggle("dropdown__list_is-hidden");
    };
    
    function updateGroupedListArray(number, currentItemKey){

      const currentItem = groupedListArray.find((elGrouped)=> elGrouped.key === currentItemKey);
      currentItem.number += number;

    }

    function updateResultText(){
      
      input.value = "";

      for (const el of groupedListArray) {
        //окончание на 1 (но не 11) - гость
        //окончание на 2,3,4 ( но не 12,13,14) - гостя
        //окончание на 0 5 6 7 8 9 - гостей
        //окончание на 11, 12, 13, 14 - гостей
        console.log(el)
        const num = String(el.number)
        if (num === "0") {
          continue;
        }

        const lastDigit = num.substring(num.length - 1);
        const twoLastDigits = num.substring(num.length - 2);
        const comma = (input.value) ? ", " : "";
        
        if (twoLastDigits === "11" || twoLastDigits === "12" || twoLastDigits === "13" || twoLastDigits === "14" ||
          lastDigit === "0" || lastDigit === "5" || lastDigit === "6" || lastDigit === "7" || lastDigit === "8" || lastDigit === "9") {
          input.value += `${comma}${num} ${el.declensions[2]}` 
        }
        else if(lastDigit === "2" || lastDigit === "3" || lastDigit === "4"){
          input.value += `${comma}${num} ${el.declensions[1]}` 
        }
        else{
          input.value += `${comma}${num} ${el.declensions[0]}`
        }
      }

      if (input.value === "") {
        input.value = initValue;
      }

    }

    function changeNumber(e){
      
      let numberElem;
      let number;
      let btnMinus;
      let plusMinus1 = 1;

      if (e.target.textContent === "+") {
        numberElem = e.target.previousElementSibling;
        btnMinus = numberElem.previousElementSibling;
        number = Number(numberElem.textContent);
        numberElem.textContent = number + 1;
        btnMinus.disabled = false;
      } else {
        numberElem = e.target.nextElementSibling;
        number = Number(numberElem.textContent);
        numberElem.textContent = number - 1;
        e.target.disabled = numberElem.textContent === "0";
        plusMinus1 = -1;
      }
      
      const currentItemKey = numberElem.dataset.key;
      updateGroupedListArray(plusMinus1, currentItemKey);

    }

    function clean(){
      
      numberElems.forEach((numberElem) => {
        console.log(`number elem ${numberElem}`)
        numberElem.textContent = "0";
        let btnMinus = numberElem.previousElementSibling;
        btnMinus.disabled = true;
      })

      cleanGroupedListArray();

      input.value = initValue;

    }

    function apply(){

      updateResultText();

    }

    function initDropdown(){

      updateResultText();//если дропдаун подан с изначально непустыми значениями
      arrowBtn.addEventListener("click", toggleDropdown);
      plusBtns.forEach((plusBtn, index) => {
        plusBtn.addEventListener("click", changeNumber);
      })
      minusBtns.forEach((minusBtn, index) => {
        minusBtn.addEventListener("click", changeNumber);
        const numberElem = minusBtn.nextElementSibling;
        console.log(numberElem.textContent)
        console.log(numberElem.textContent === "0" ? true : false);
        minusBtn.disabled = numberElem.textContent === "0" ? true : false;
      })
      cleanBtn.addEventListener("click", clean);
      applyBtn.addEventListener("click", apply);

    }

    initDropdown();

  })//forEach dropdown
 
}

export default initDropdown;