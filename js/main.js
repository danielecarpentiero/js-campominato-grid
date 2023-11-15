/* funzione riutilizzabile */
function toggleProperty(elementClass, property) {
  let element = document.querySelector(elementClass);
  if (element) {
    element.classList.toggle(property);
  }
  return element;
}
/* bottone che scompare */
const buttonToggle = document.querySelector(".play");
buttonToggle.addEventListener("click", function () {
  toggleProperty(".board", "hidden");
});

const boxAdder = document.querySelector(".board");

for (let i = 0; i < 100; i++) {
  const boxes = document.createElement("div");
  boxes.classList.add("box");
  boxes.classList.add("flex");
  boxes.innerHTML = i + 1;
  boxAdder.append(boxes);
}

/* casella diventa rossa al click */
const boxClicker = document.querySelectorAll(".box");
boxClicker.addEventListener("click", function () {
  toggleProperty(".box", ".color");
});
