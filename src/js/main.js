// This is the JavaScript file we edit

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 48) {
        zerof();
    }
    else if(event.keyCode == 49) {
        onef();
    }
    else if(event.keyCode == 50) {
        twof();
    }
    else if(event.keyCode == 51) {
        threef();
    }
    else if(event.keyCode == 52) {
        fourf();
    }
    else if(event.keyCode == 53) {
        fivef();
    }
    else if(event.keyCode == 54) {
        sixf();
    }
    else if(event.keyCode == 55) {
        sevenf();
    }
    else if(event.keyCode == 56) {
        eightf();
    }
    else if(event.keyCode == 57) {
        ninef();
    }
    else if(event.keyCode == 49) {
        onef();
    }
    else if(event.keyCode == 13) {
        equals();
    }
    else if(event.keyCode == 187) {
        add();
    }
    else if(event.keyCode == 189) {
        subtract();
    }
    else if(event.keyCode == 56) {
        multiply();
    }
    else if(event.keyCode == 191) {
        divide();
    }
    else if(event.keyCode == 190) {
        decimali();
    }
    else if(event.keyCode == 27) {
        blankitout();
    }
  //  else if(event.keyCode == 8) {
  //      backspacei();
  //  }
    else if(event.keyCode == 88) {
        multiply();
    }
});








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

//function backspacei() {
//  holding.splice(-1, 1);
//  console.log(holding);
//  display.innerHTML = display.innerHTML.slice(0, -1);
//}
