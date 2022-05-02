class Dropdown {

  constructor(dropdownHtml) {
    this.dropdownHtml = dropdownHtml;
    this.listHtml = this.dropdownHtml.querySelector(".js-dropdown__list");
    this.expandBtn = this.dropdownHtml.querySelector(".js-dropdown__expand-btn");
    this.input = this.dropdownHtml.querySelector(".js-dropdown__input");
    this.plusBtns = this.dropdownHtml.querySelectorAll(".js-dropdown__plus-btn");
    this.numberElems = this.dropdownHtml.querySelectorAll(".js-dropdown__number");
    this.minusBtns = this.dropdownHtml.querySelectorAll(".js-dropdown__minus-btn");
    this.applyBtn = this.dropdownHtml.querySelector('.js-dropdown__apply-btn');
    this.cleanBtn = this.dropdownHtml.querySelector('.js-dropdown__clean-btn');
    this.initValue = this.input.value;
    this.notSeparatelyMessageHtml = undefined;
    this.groupedListArray = []

    this.createGroupedListArray();
    this.updateResultText();
    this.bindMethods();
    this.addEventListeners();

  }

  bindMethods() {
    this.handleApplyClick = this.handleApplyClick.bind(this);
    this.handleCleanClick = this.handleCleanClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }

  addEventListeners() {

    this.expandBtn.addEventListener("click", this.toggleDropdown);
    this.plusBtns.forEach((plusBtn) => {
      plusBtn.addEventListener("click", this.handleNumberChange);
    })
    this.minusBtns.forEach((minusBtn) => {
      minusBtn.addEventListener("click", this.handleNumberChange);
      const numberElem = minusBtn.nextElementSibling;
      minusBtn.disabled = numberElem.textContent === "0" ? true : false;
    })

    if (this.cleanBtn) {
      this.setCleanBtnVisibility();
      this.applyBtn.addEventListener("click", this.handleApplyClick);
      this.cleanBtn.addEventListener("click", this.handleCleanClick);
    }

  }

  createGroupedListArray() {
    //создаем сгруппированный массив списка dropboxа: например 
    //массив [{name: "Взрослые", number: 2, declensions: ["гость", "гостя", "гостей"]},
    //        {name: "Дети", number: 1, declensions: ["гость", "гостя", "гостей"]},
    //        {name: "Младенцы", number: 1, declensions: ["младенец", "младенца", "младенцев"]}]
    //преобразуется в массив
    //            [{key: "гость", number: 3, declensions: ["гость", "гостя", "гостей"]},         
    //             {key: "младенец", number: 1, declensions: ["младенец", "младенца", "младенцев"]}]
    //по этому массиву подсчитываем сгруппированное количество (number) и формируем текст инпута каждый раз при нажатии кнопок + и -,
    // например: "3 гостей, 1 младенец"
    const listArray = JSON.parse(this.listHtml.dataset.list); //все пункты списка с количеством и склонениями
    for (const el of listArray) {
      const elementInGroupedArray = this.groupedListArray.find((elGrouped) => elGrouped.key === el.declensions[0])
      if (elementInGroupedArray) {
        elementInGroupedArray.number = elementInGroupedArray.number + Number(el.number);
      } else {
        this.groupedListArray.push({
          key: el.declensions[0],
          number: Number(el.number),
          declensions: [...el.declensions]
        })
      }
    }
  }

  cleanGroupedListArray() {

    for (const el of this.groupedListArray) {
      el.number = 0;
    }

  }

  toggleDropdown() {
    this.listHtml.classList.toggle("dropdown__list_is-hidden");
  }

  updateGroupedListArray(number, currentItemKey) {

    const currentItem = this.groupedListArray.find((elGrouped) => elGrouped.key === currentItemKey);
    currentItem.number += number;

  }

  updateResultText() {

    this.input.value = "";

    for (const el of this.groupedListArray) {
      //окончание на 1 (но не 11) - гость
      //окончание на 2,3,4 ( но не 12,13,14) - гостя
      //окончание на 0 5 6 7 8 9 - гостей
      //окончание на 11, 12, 13, 14 - гостей
      const num = String(el.number)
      if (num === "0") {
        continue;
      }

      const lastDigit = num.substring(num.length - 1);
      const twoLastDigits = num.substring(num.length - 2);
      const comma = (this.input.value) ? ", " : "";

      if (twoLastDigits === "11" || twoLastDigits === "12" || twoLastDigits === "13" || twoLastDigits === "14" ||
        lastDigit === "0" || lastDigit === "5" || lastDigit === "6" || lastDigit === "7" || lastDigit === "8" || lastDigit === "9") {
        this.input.value += `${comma}${num} ${el.declensions[2]}`
      } else if (lastDigit === "2" || lastDigit === "3" || lastDigit === "4") {
        this.input.value += `${comma}${num} ${el.declensions[1]}`
      } else {
        this.input.value += `${comma}${num} ${el.declensions[0]}`
      }
    }

    if (this.input.value === "") {
      this.input.value = this.initValue;
    }

  }

  handleNumberChange(e) {

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
    this.updateGroupedListArray(plusMinus1, currentItemKey);
    this.updateResultText();
    this.setCleanBtnVisibility();

  }

  handleCleanClick() {

    this.numberElems.forEach((numberElem) => {
      numberElem.textContent = "0";
      let btnMinus = numberElem.previousElementSibling;
      btnMinus.disabled = true;
    })

    this.cleanGroupedListArray();
    this.setCleanBtnVisibility();

    this.input.value = this.initValue;

  }

  handleApplyClick() {

    this.updateResultText();
    if (this.cantBeSeparateSelected()) {
     this.toggleDropdown();
    }

  }

  //- for example infants can't be selected separately
  cantBeSeparateSelected() {
  
    for (let i = 0; i < this.numberElems.length; i++) {
      const item = this.numberElems[i];
      const notSeparatelyMessage = item.dataset.notseparately;
      if (notSeparatelyMessage && item.textContent !== '0') {

        const somethingElseIsSelected = this.groupedListArray.find((el) => el.number > 0 && el.key !== item.dataset.key)
        if (!somethingElseIsSelected) {

          const messageEl = item.parentElement.querySelector('.js-dropdown__notSeparatelyMessage');
          messageEl.classList.add("dropdown__notSeparatelyMessage_visible");
          messageEl.textContent = notSeparatelyMessage;
          this.notSeparatelyMessageHtml = messageEl;
          setTimeout(this.closeMessage, 3000);
          return false;
        }

      }

    }

    return true;

  }

  closeMessage() {
    this.notSeparatelyMessageHtml.classList.remove("dropdown__notSeparatelyMessage_visible");
  }

  setCleanBtnVisibility() {

    if (this.cleanBtn) {
      let allZeros = true;

      this.groupedListArray.forEach((item) => {
        if (item.number) {
          allZeros = false;
        }
      })

      if (allZeros) {
        this.cleanBtn.classList.add("dropdown__clean-btn_is-hidden");
      } else {
        this.cleanBtn.classList.remove("dropdown__clean-btn_is-hidden");
      }
    }

  }

}

export default Dropdown