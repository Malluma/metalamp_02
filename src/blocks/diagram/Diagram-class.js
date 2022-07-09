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
    this.handleSectorClick = this.handleSectorClick.bind(this);
    this.handleSectorEnterPress = this.handleSectorEnterPress.bind(this);
  }

  addEventListeners() {
    this.diagramSectors.forEach((sector) => {
       sector.addEventListener('click', this.handleSectorClick);
       sector.addEventListener("keyup", this.handleSectorEnterPress);
    })
  }

  handleSectorClick(event){
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

  handleSectorEnterPress(event){
    if(event.key === "Enter"){
      this.handleSectorClick(event);
    }
  }

}

export default Diagram