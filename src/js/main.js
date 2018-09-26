// This is the JavaScript file we edit
let store=[];
let result=[];
function calculate(input){
  switch(input){
    case "1":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "2":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "3":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "4":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "5":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "6":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "7":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "8":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "9":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "0":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case  "+":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "-":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "*":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "/":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
    case "=" :
      document.getElementById("display").innerHTML=store.join("");

      document.getElementById("display").innerHTML=eval(store.join(""));
      result.push(eval(store.join("")));
      break;
    case "recall":
      document.getElementById("display").innerHTML=result.join(", ");
      break;
    case ".":
      store.push(input);
      document.getElementById("display").innerHTML=store.join("");
      break;
  }
console.log(store);
}
function reset(){
  store =[];
  document.getElementById("display").innerHTML=0;
}
