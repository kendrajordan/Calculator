function calculator(val){

let operators = document.getElementById("operators");
//below is where each number will be displayed when the corresponding button is pressed
let display = document.getElementById("display");

let clear = document.getElementById("clear");
//below are all the number buttons
/*let btn0 = document.getElementById("btn0").textContent;
let btn1 = document.getElementById("btn1").textContent;
let btn2 = document.getElementById("btn2").textContent;
let btn3 = document.getElementById("btn3").textContent;
let btn4 = document.getElementById("btn4").textContent;
let btn5 = document.getElementById("btn5").textContent;
let btn6 = document.getElementById("btn6").textContent;
let btn7 = document.getElementById("btn7").textContent;
let btn8 = document.getElementById("btn8").textContent;
let btn9 = document.getElementById("btn9").textContent;*/


if (display.textContent == 0){
  display.textContent = val;
}  else{
  display.textContent += val;
}
 if(val == "C"){
  display.textContent = 0;
}
if(val == "."){
 display.textContent + ".";
}
}
