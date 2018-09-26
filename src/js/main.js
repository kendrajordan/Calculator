// This is the "use strict";

// This is the JavaScript file we edit
var display = document.getElementById('display');
var first_num = null;
var second_num = null;
var state = 'ready';
var sign;

function input(digit) {
    if (state == 'ready' && display.innerHTML.length > 10) {
        return;
    }
  if (digit === '.' && display.innerHTML.search(/\./) >= 0) {
    return;
  }

  if (state === 'ready_second' || state === 'solved') {
    display.innerHTML = digit;
    // state = 'ready';
  } else {
    if (display.innerHTML === '0') {
      display.innerHTML = digit;
    } else {
      display.innerHTML += digit;
    }
  }
}

function clear_display() {
  display.innerHTML = '0';
  state = 'ready';
  first_num = second_num = null;
  console.log('END OF CLEAR_DISPLAY()');
  debug();
}

function operator(current_sign) {
    console.log('BEGINNING OF OPERATOR()');
    debug();

    if (state == 'error') {

        clear_display();

    } else if (state == 'ready') {

        first_num = parseFloat(display.innerHTML);
        state = 'ready_second';
        sign = current_sign;

    } else if (state == 'solved') {

        state = 'ready_second';
        sign = current_sign;

    } else if (state == 'ready_second') {

        calculate();
        state = 'ready_second';
        sign = current_sign;

    }

  console.log('END OF OPERATOR()');
  debug();
}

function calculate() {
    if (state == 'error') {
        clear_display();
        return;
    }
  second_num = parseFloat(display.innerHTML);
  console.log('BEGINNING OF CALCULATE()');
  debug();
  

  var solution;
  var temp_first = first_num.toString();
  var temp_second = second_num.toString(); //temp_first=temp_first.substring(temp_first.search(/\./)).length;

  temp_first = temp_first.substring(temp_first.search(/\./) + 1).length;
  temp_second = temp_second.substring(temp_second.search(/\./) + 1).length;
  var dec_places = 0;

  if (temp_first > temp_second) {
    dec_places = temp_first;
  } else {
    dec_places = temp_second;
  }

  if (sign === '/') {
    solution = first_num / second_num;
  } else if (sign === 'x') {
    solution = first_num * second_num;
  } else if (sign === '-') {
    solution = first_num - second_num;
  } else if (sign === '+') {
    solution = first_num + second_num;
  }

  solution = solution.toFixed(dec_places);
  if (solution.length > 10) {
    display.innerHTML = 'ERROR';
    first_num = second_num = null;
    state = 'error';
    return;
  }

    solution = parseFloat(solution);


  display.innerHTML = solution;
  state = 'solved';
  sign = null;

  first_num = solution;
  second_num = null;
  console.log('END OF CALCULATE()');
  debug();
  console.log('solution', solution, typeof solution);

  return solution;
}


function highlight(id) {
    document.getElementById(id).style.backgroundColor = '#CCC';
}

function unhighlight(id) {
    document.getElementById(id).style.backgroundColor = 'initial';
}

function debug() {
    console.log('   first_num', first_num, typeof first_num);
    console.log('   second_num', second_num, typeof second_num);
    console.log('   sign', sign, typeof sign);
    console.log('   state', state, typeof state);
}
