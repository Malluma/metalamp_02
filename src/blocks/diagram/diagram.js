import './diagram.scss';

import Diagram from './Diagram-class'

const diagrams = document.querySelectorAll('.js-diagram');

diagrams.forEach((diagram) => {
  //console.log(diagram)
  const diagramInstance = new Diagram(diagram);
})