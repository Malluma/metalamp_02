class Diagram {

  constructor(diagram) {

    this.diagram = diagram;
    this.activeSectorNumber = this.diagram.querySelector('.js-diagram__active-sector-number');
    this.activeSectorInfo = this.activeSectorNumber.parentElement;
    this.diagramSectors = this.diagram.querySelectorAll('.js-diagram__item');
    
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleItemKeyUp = this.handleItemKeyUp.bind(this);
  }

  addEventListeners() {
    this.diagramSectors.forEach((sector) => {
       sector.addEventListener('click', this.handleItemClick);
       sector.addEventListener("keyup", this.handleItemKeyUp);
    })
  }

  handleItemClick(event){
    const currentSector = event.target;
    const sectorColorIndex = currentSector.dataset.index;
    this.removeSectorColorClasses();
    this.activeSectorInfo.classList.add(`diagram__active-sector-color-${sectorColorIndex}`);
    this.activeSectorNumber.textContent = currentSector.dataset.number;
  }
  
  removeSectorColorClasses(){
    for(let i=1; i < 5; i++){
      this.activeSectorInfo.classList.remove(`diagram__active-sector-color-${i}`);
    }
  }

  handleItemKeyUp(event){
    if(event.key === "Enter"){
      this.handleItemClick(event);
    }
  }

}

export default Diagram