import './text-field.scss'

import $ from "jquery";
import "jquery-mask-plugin";

$(function(){
  $('.js-text-field__input_masked').mask('00.00.0000');
})