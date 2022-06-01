import './form-elements.scss';

import '../../blocks/bullet-list/bullet-list';
import '../../blocks/button/button';
import '../../blocks/checkbox-list/checkbox-list';
import '../../blocks/date-dropdown/date-dropdown';
import '../../blocks/dropdown/dropdown';
import '../../blocks/facility/facility';
import '../../blocks/like-btn/like-btn';
import initPagination from '../../blocks/pagination/pagination';
import '../../blocks/radio/radio';
import '../../blocks/range-slider/range-slider';
import '../../blocks/rating/rating.js';
import '../../blocks/review/review';
import '../../blocks/text-field/text-field';
import '../../blocks/toggle/toggle';

const itemsOnPage = 12;
const itemsTotalAmount = 180;
const pagesAmount = 15;
initPagination(pagesAmount, itemsTotalAmount, itemsOnPage);
