export const smallWidgetToBig = () => {
  const buttons = document.querySelectorAll(".events__small-widget button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.parentNode.id;
        document.getElementById(id).remove();
        
    
    });
  });
};
