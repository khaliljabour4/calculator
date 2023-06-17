let operation = "";
let result = "";
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.number === "=") {
      result = eval(operation);
    } else if (button.dataset.number === "ac") {
      operation = "";
      result = "";
    } else if (button.dataset.number === "del") {
      operation = operation.slice(0, -1);
    } else {
      operation += button.dataset.number;
    }
    // console.log(button.dataset.number)
    console.log(typeof operation);
    document.querySelector(".operation-section").innerHTML = operation;
    document.querySelector(".result-part").innerHTML = result;
  });
});
