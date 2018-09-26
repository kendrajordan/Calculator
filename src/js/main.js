// This is the JavaScript file we edit
var operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b }
  }




var display = document.getElementById('thedisplay');

var filled = 0

var holding = [];

var firstnum = [];

var secondnum = [];

var operator = ""


function zerof() {
      if(display.innerHTML == 0 || filled == 1){
        display.innerHTML = " ";
        filled = 0
        }
        holding.push(0);
        display.innerHTML += "0";
        console.log(holding);
      }

function onef() {
      if(display.innerHTML == 0 || filled == 1){
        display.innerHTML = " ";
        filled = 0;
        }
        holding.push(1);
        display.innerHTML += "1";
        console.log(holding);
      }


function twof() {
      if(display.innerHTML == 0 || filled == 1){
        display.innerHTML = " ";
        filled = 0;
        }
        holding.push(2);
        display.innerHTML += "2";
        console.log(holding);
      }

function threef() {
      if(display.innerHTML == 0 || filled == 1){
        display.innerHTML = " ";
        filled = 0;
        }
        holding.push(3);
        display.innerHTML += "3";
        console.log(holding);
      }

function fourf() {
      if(display.innerHTML == 0 || filled == 1){
        display.innerHTML = " ";
        filled = 0;
        }
        holding.push(4);
        display.innerHTML += "4";
        console.log(holding);
      }

function fivef() {
    if(display.innerHTML == 0 || filled == 1){
      display.innerHTML = " ";
      filled = 0;
      }
      holding.push(5);
      display.innerHTML += "5";
      console.log(holding);
    }

function sixf() {
  if(display.innerHTML == 0 || filled == 1){
    display.innerHTML = " ";
    filled = 0;
    }
    holding.push(6);
    display.innerHTML += "6";
    console.log(holding);
  }


function sevenf() {
    if(display.innerHTML == 0 || filled == 1){
      display.innerHTML = " ";
      filled = 0;
      }
      holding.push(7);
      display.innerHTML += "7";
      console.log(holding);
    }

function eightf() {
  if(display.innerHTML == 0 || filled == 1){
    display.innerHTML = " ";
    filled = 0;
    }
    holding.push(8);
    display.innerHTML += "8";
    console.log(holding);
  }

function ninef() {
  if(display.innerHTML == 0 || filled == 1){
    display.innerHTML = " ";
    filled =0;
  }
  holding.push(9);
  display.innerHTML += "9";
  console.log(holding);
}

function add() {

  if (firstnum.length != 0){
    display.innerHTML += "+";
    secondnum = holding.join("");
    holding = [];

    secondnum = parseFloat(secondnum);

    firstnum = operators[operator](firstnum, secondnum);
    console.log(firstnum)
  //  display.innerHTML = firstnum;
    operator = "+"

  }else{

  display.innerHTML += "+";
  operator = "+"
  firstnum = holding.join("");
  holding = [];

  firstnum = parseFloat(firstnum);
}

}

function subtract() {
  if (firstnum.length != 0){
    display.innerHTML += "-";
    secondnum = holding.join("");
    holding = [];

    secondnum = parseFloat(secondnum);

    firstnum = operators[operator](firstnum, secondnum);
    console.log(firstnum)
    //display.innerHTML = firstnum;
    operator = "-"

  }else{
  display.innerHTML += "-";
  operator = "-"
  firstnum = holding.join("");
  holding = [];
  firstnum = parseFloat(firstnum);
}
}

function multiply() {
  if (firstnum.length != 0){
    display.innerHTML += "*";
    secondnum = holding.join("");
    holding = [];

    secondnum = parseFloat(secondnum);

    firstnum = operators[operator](firstnum, secondnum);
    console.log(firstnum)
    //display.innerHTML += firstnum;
    operator = "*"

  }else{

  display.innerHTML += "*";
  operator = "*"
  firstnum = holding.join("");
  holding = [];
  firstnum = parseFloat(firstnum);
}
}

function divide() {
  if (firstnum.length != 0){
    display.innerHTML += "/";
    secondnum = holding.join("");
    holding = [];

    secondnum = parseFloat(secondnum);

    firstnum = operators[operator](firstnum, secondnum);
    console.log(firstnum)
    //display.innerHTML = firstnum;
    operator = "/"

  }else{
  display.innerHTML += "/";
  operator = "/"
  firstnum = holding.join("");
  holding = [];
  firstnum = parseFloat(firstnum);
}

}

function equals() {
  display.innerHTML = ""
  secondnum = holding.join("");
  holding = [];
  secondnum = parseFloat(secondnum);
  console.log(operators[operator](firstnum, secondnum));
  display.innerHTML = operators[operator](firstnum, secondnum);
  filled = 1
  firstnum = []
  secondnum = []
}

function blankitout() {
  display.innerHTML = "0";
  firstnum = [];
  secondnum = [];
  holding = [];

}

function decimali() {
  holding.push(".");
  display.innerHTML += "."
console.log(holding);

}
