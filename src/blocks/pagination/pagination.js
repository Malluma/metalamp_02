import './pagination.scss'
import Pagination from '../../blocks/pagination/Pagination-class';

function initPagination(pagesAmount, itemsTotalAmount, itemsOnPage){

  const paginationsHtml = document.querySelectorAll('.js-pagination');
  paginationsHtml.forEach((pagination) => {
    
    const paginationInstance = new Pagination(pagination, pagesAmount, itemsTotalAmount, itemsOnPage);

  })
  
}

export default initPagination