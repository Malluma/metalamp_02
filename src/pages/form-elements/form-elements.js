import './form-elements.scss';

import '../../blocks/dropdown/dropdown';
import '../../blocks/date-dropdown/date-dropdown';
import '../../blocks/checkbox-list/checkbox-list';
import '../../blocks/facility/facility';
import '../../blocks/like-btn/like-btn';
import '../../blocks/radio/radio';
import '../../blocks/rating/rating.js';
import '../../blocks/review/review';
import '../../blocks/text-field/text-field';
import '../../blocks/toggle/toggle';
import '../../blocks/range-slider/range-slider';
import '../../blocks/button/button';
import initPagination from '../../blocks/pagination/pagination';
import '../../blocks/bullet-list/bullet-list';

const itemsOnPage = 12;
const itemsTotalAmount = 180;
const pagesAmount = 15;
initPagination(pagesAmount, itemsTotalAmount, itemsOnPage);
