function toggleProperty(elementClass, property) {
  let element = document.querySelector(elementClass);
  if (element) {
    element.classList.toggle(property);
  }
}

const buttonToggle = document.querySelector(".play");
buttonToggle.addEventListener("click", function () {
  toggleProperty(".board", "hidden");
});

const boxAdder = document.querySelector(".board");
