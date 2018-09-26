"use strict";

// This is the JavaScript file we edit
var store = [];
var result = [];

function keyPress(input) {
  switch (input) {
    case "0":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "1":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "2":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "3":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "4":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "5":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "6":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "7":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "8":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "9":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "+":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "-":
      store.push(input);
      document.getElementById("display").innerHTML = eval(store.join(""));
      break;

    case "/":
      store.push(input);
      document.getElementById("display").innerHTML = eval(store.join(""));
      break;

    case "*":
      store.push(input);
      document.getElementById("display").innerHTML = eval(store.join(""));
      break;

    case ".":
      store.push(input);
      document.getElementById("display").innerHTML = store.join("");
      break;

    case "=":
      result.push(eval(store.join("")));
      console.log(result);
      document.getElementById("display").innerHTML = eval(store.join(""));
      break;

    case "recall":
      document.getElementById("display").innerHTML = result.join(", ");
      break;
  }
}

function reset() {
  store = [];
  document.getElementById("display").innerHTML = 0;
}