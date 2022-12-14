class SmallEvent {
  constructor(element) {
    this.element = element;
  }
  createSmallWidget() {
    const mainContainer = document.querySelector(".events");
    const divEvent = document.createElement("div");
    divEvent.className = "events__small-widget";
    divEvent.id = `${this.element.id}`;
    divEvent.innerHTML = `
        <h3>${this.element.name}</h3>
        <a href="#${divEvent.id}"><button>More</button></a>`;
    mainContainer.appendChild(divEvent);
    this.divEvent = divEvent;
  }
}

export default SmallEvent;
