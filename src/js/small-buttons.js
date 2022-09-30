import BigEvent from "./classes/Big_event";
export const smallWidgetToBig = (dataArray) => {
    const buttons = document.querySelectorAll(".events__small-widget a button");
    console.log(buttons)
    document.getElementById("home").insertBefore(document.getElementById("1"),document.getElementById("2"))
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.parentNode.parentNode.id;
      const bigCard = new BigEvent(dataArray[Number(id) - 1]);
      document.getElementById(id).remove();
      bigCard.createBigWidget(bigCard);
      console.log();

      insertAfter(
        document.getElementById(id),
        document.getElementById(`${Number(id) - 1}`)
      );


    });
  });
};

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
