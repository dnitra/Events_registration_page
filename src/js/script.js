import { smallWidgetToBig } from "./small-buttons";
import BigEvent from "./classes/Big_event";
import SmallEvent from "./classes/Small_event";

// load of the events trought fetch - zatim nejsou data, takze nize simulace dat -------------------------------------------------------------

const loadEvents = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/2ff26282/events"
  );
  const data = await response.json();
  const dataArray = Array.from(data);
  dataArray.forEach((element, index) => {
    if (index == 0) {
      const bigCard = new BigEvent(element);
      bigCard.createBigWidget();
    } else {
      const smallCard = new SmallEvent(element);
      smallCard.createSmallWidget();
    }
  });
  smallWidgetToBig(dataArray);
};

loadEvents();

// preparing data, need to fill from the form -----------------------------------------------------------------------------------------------------
export const generateForm = (eventId) => {
  // zobrazeni form
  document.querySelector(".form.hidden").classList.remove("hidden");
  //   document.getElementById("home").style.display = "none";
  // send data
  let mybtn = document.querySelector("#submit");

  mybtn.addEventListener("click", (event) => {
    console.log("form submit");
    event.preventDefault();
    console.log(eventId);
    let dataRegistration = {
      registrationEventId: eventId,
      registrationName: document.getElementById("Name").value,
      registrationSurname: document.getElementById("last_name").value,
      email: document.getElementById("Email").value,
      registrationPhone: document.getElementById("phone_nr").value,
      registrationAge: document.getElementById("age").value,
    };
    // fetch send data --------------------------------------------------------------------------------------------------------------------------------
    const sendData = async () => {
      const registration = await fetch(
        `https://test-api.codingbootcamp.cz/api/2ff26282/events/${eventId}/registrations`,
        {
          method: "POST",
          body: JSON.stringify(dataRegistration),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const dataSendReponse = await registration.json();
    };
    sendData();
  });
};
