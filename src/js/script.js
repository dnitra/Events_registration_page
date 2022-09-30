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

let mybtn = document.querySelector("#submit");

mybtn.addEventListener("click", (event) => {
  let dataRegistration = {
    // registrationEventId : ,
    registrationName: document.querySelector("#Name"),
    registrationSurname: document.querySelector("#last_name"),
    registrationEmail: document.querySelector("#Email"),
    registrationPhone: document.querySelector("#phone_nr"),
    registrationAge: document.querySelector("#age"),
  };
  // fetch send data --------------------------------------------------------------------------------------------------------------------------------
  const sendData = async () => {
    const registration = await fetch(
      "https://test-api.codingbootcamp.cz/api/2ff26282/events/EVENT_ID/registrations",
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
});
