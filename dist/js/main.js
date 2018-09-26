"use strict";

// This is the JavaScript file we edit
var operators = {
  '+': function _(a, b) {
    return a + b;
  },
  '-': function _(a, b) {
    return a - b;
  },
  '*': function _(a, b) {
    return a * b;
  },
  '/': function _(a, b) {
    return a / b;
  }
};
var display = document.getElementById('thedisplay');
var holding = [];
var firstnum = [];
var secondnum = [];
var operator = "";

function zerof() {
  if (holding.length == 0) {
    display.innerHTML = " ";
  }

  holding.push(0);
  display.innerHTML += "0";
  console.log(holding);
}

function onef() {
  if (holding.length == 0) {
    display.innerHTML = " ";
  }

  holding.push(1);
  display.innerHTML += "1";
  console.log(holding);
}

function twof() {
  if (holding.length == 0) {
    display.innerHTML = " ";
  }

  holding.push(2);
  display.innerHTML += "2";
  console.log(holding);
}

function threef() {
  if (holding.length == 0) {
    display.innerHTML = " ";
  }

  holding.push(3);
  display.innerHTML += "3";
  console.log(holding);
}

function fourf() {
  if (holding.length == 0) {
    display.innerHTML = " ";
  }

  holding.push(4);
  display.innerHTML += "4";
  console.log(holding);
}

function fivef() {
  if (holding.length == 0) {
    display.innerHTML = " ";
  }

  holding.push(5);
  display.innerHTML += "5";
  console.log(holding);
}

function sixf() {
  if (holding.length == 0) {
    display.innerHTML = " ";
  }

  holding.push(6);
  display.innerHTML += "6";
  console.log(holding);
}

function sevenf() {
  if (holding.length == 0) {
    display.innerHTML = " ";
  }

  holding.push(7);
  display.innerHTML += "7";
  console.log(holding);
}

function eightf() {
  if (holding.length == 0) {
    display.innerHTML = " ";
  }

  holding.push(8);
  display.innerHTML += "8";
  console.log(holding);
}

function ninef() {
  if (holding.length == 0) {
    display.innerHTML = " ";
  }

  holding.push(9);
  display.innerHTML += "9";
  console.log(holding);
}

function add() {
  if (firstnum.length != 0) {
    display.innerHTML = " ";
    secondnum = holding.join("");
    holding = [];
    secondnum = parseFloat(secondnum);
    firstnum = operators[operator](firstnum, secondnum);
    console.log(firstnum);
    display.innerHTML = firstnum;
    operator = "+";
  } else {
    display.innerHTML = " ";
    operator = "+";
    firstnum = holding.join("");
    holding = [];
    firstnum = parseFloat(firstnum);
  } //if (secondnum[0] != ""){
  //    console.log(firstnum + secondnum);
  //  }
  // grab string, combine it

}

function subtract() {
  if (firstnum.length != 0) {
    display.innerHTML = " ";
    secondnum = holding.join("");
    holding = [];
    secondnum = parseFloat(secondnum);
    firstnum = operators[operator](firstnum, secondnum);
    console.log(firstnum);
    display.innerHTML = firstnum;
    operator = "-";
  } else {
    display.innerHTML = " ";
    operator = "-";
    firstnum = holding.join("");
    holding = [];
    firstnum = parseFloat(firstnum);
  }
}

function multiply() {
  if (firstnum.length != 0) {
    display.innerHTML = " ";
    secondnum = holding.join("");
    holding = [];
    secondnum = parseFloat(secondnum);
    firstnum = operators[operator](firstnum, secondnum);
    console.log(firstnum);
    display.innerHTML = firstnum;
    operator = "*";
  } else {
    display.innerHTML = " ";
    operator = "*";
    firstnum = holding.join("");
    holding = [];
    firstnum = parseFloat(firstnum);
  }
}

function divide() {
  if (firstnum.length != 0) {
    display.innerHTML = " ";
    secondnum = holding.join("");
    holding = [];
    secondnum = parseFloat(secondnum);
    firstnum = operators[operator](firstnum, secondnum);
    console.log(firstnum);
    display.innerHTML = firstnum;
    operator = "/";
  } else {
    display.innerHTML = " ";
    operator = "/";
    firstnum = holding.join("");
    holding = [];
    firstnum = parseFloat(firstnum);
  }
}

function equals() {
  display.innerHTML = " ";
  secondnum = holding.join("");
  holding = [];
  secondnum = parseFloat(secondnum);
  console.log(operators[operator](firstnum, secondnum));
  display.innerHTML += operators[operator](firstnum, secondnum);
}

function blankitout() {
  display.innerHTML = "0";
  firstnum = [];
  secondnum = [];
  holding = [];
}

function decimali() {
  holding.push(".");
  console.log(holding);
}