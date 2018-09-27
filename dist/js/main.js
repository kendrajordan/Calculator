"use strict";

// This is the JavaScript file we edit
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    // "interactive" means that the DOM is ready for us manipulate
    start();
  }
};

function start() {
  // Create event listeners on every button
  var buttons = document.getElementsByClassName("key");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", ButtonLogic);
  }
}

function ButtonLogic() {
  console.log("You pressed a button!");
}