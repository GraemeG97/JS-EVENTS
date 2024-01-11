console.log("Hello, events");

const colorBtn = document.getElementById("the-button");

function changeColour() {
  if (document.body.style.background == "tomato") {
    document.body.style.background = "steelblue";
  } else {
    document.body.style.background = "red";
  }
}

colorBtn.addEventListener("mouseover", changeColour);
