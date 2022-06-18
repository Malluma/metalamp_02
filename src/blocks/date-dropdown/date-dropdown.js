import $ from 'jquery';
import Datepicker1Field from './Datepicker1Field-class';
import Datepicker2Fields from './Datepicker2Fields-class';

import './date-dropdown.scss';

$(() => {
  //single date dropdown
  $('.js-date-dropdown__double-start').each((index, startDateInput) => {

    const currentElId = `js-air-datepicker_double${index}`;
    const $startDateInput = $(startDateInput);
    const $hiddenDateInput = $startDateInput.prev();
    const $startDateLabel = $startDateInput.parent().parent();
    const $endDateLabel = $startDateLabel.next();
    const endDateInput = $endDateLabel.find('.js-date-dropdown__double-end')[0];
    $(startDateInput).addClass(currentElId);
    $(endDateInput).addClass(currentElId);
    const datepicker2FieldsInstance = new Datepicker2Fields({
      startDateInput: startDateInput,
      endDateInput: endDateInput,
      hiddenDateInput: $hiddenDateInput.html(),
      id: currentElId
    });

  });
  //double date dropdown
  $('.js-date-dropdown__single').each((index, startEndDateInput) => {

    const currentElId = `js-air-datepicker_single${index}`;
    const datepicker1FieldInstance = new Datepicker1Field({
      startEndDateInput: startEndDateInput,
      id: currentElId
    });

  });
});