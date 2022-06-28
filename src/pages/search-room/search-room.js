import './search-room.scss';

import '../../page-layout/template/template';

import '../../blocks/checkbox-list/checkbox-list';
import '../../blocks/date-dropdown/date-dropdown';
import '../../blocks/dropdown/dropdown';
import '../../blocks/footer/footer';
import '../../blocks/header/header';
import initPagination from '../../blocks/pagination/pagination';'../../blocks/pagination/pagination';
import '../../blocks/range-slider/range-slider';
import '../../blocks/room/room';

const itemsOnPage = 12;
const itemsTotalAmount = 180;
const pagesAmount = 15;
initPagination(pagesAmount, itemsTotalAmount, itemsOnPage);