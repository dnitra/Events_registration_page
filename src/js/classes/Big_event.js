import { generateForm } from "./../script";

class BigEvent {
  constructor(element) {
    this.element = element;
  }
  createBigWidget() {
    const mainContainer = document.querySelector(".events");
    const divEvent = document.createElement("div");
    divEvent.className = "events__big-widget big-widget";
    divEvent.id = `${this.element.id}`;
    divEvent.innerHTML = `
        <div class="big-widget__featured"><h3>Featured event</h3></div>
        <div class="big-widget__img-div"><img src=${this.element.image_url} alt="image placeholder" /></div>
        <div class="big-widget__info-container">
            <h2>${this.element.name}</h2>
            <p>${this.element.description}</p>
            <button class="register">Register</button>
        </div>`;
    mainContainer.appendChild(divEvent);
    this.divEvent = divEvent;

    // pokus o eventlistener na cudliku

    let registerButton = document.querySelector(".register");
    registerButton.addEventListener("click", () => generateForm(divEvent.id));
  }
}
export default BigEvent;
