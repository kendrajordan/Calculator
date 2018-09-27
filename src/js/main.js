let display = document.getElementById('display');
let value1 = null; // initializing to null so we can easily check if value1 has been modified
let operator = null;
let value2 = null;
let lastButton = null;

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        // "interactive" means that the DOM is ready for us manipulate
        start();
    }
}

function start() {
    // Create event listeners on every button
    let buttons = document.getElementsByClassName("key");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", buttonLogic);
    }
}

function buttonLogic(event) {

    let BtnValue = event.target.innerHTML;

    if ( isADigit(BtnValue) ) {
        numberWasEntered(BtnValue);
    }
    else if ( isDecimal(BtnValue) ) {
        decimalWasEntered(BtnValue);
    }
    else if ( isClear(BtnValue) ) {
        clear();
    }
    else {
        nonNumberWasEntered(BtnValue);
    }

    lastButton = BtnValue;

}

function numberWasEntered(thisButton) {
    if ( isAnOperator(lastButton) ) {
        display.value = thisButton;
    }
    else  {
        if (display.value == '0') {
            display.value = thisButton;
        }
        else {
            display.value += thisButton;
        }
    }
}

function decimalWasEntered(n) {

    if (displayAlreadyHasDecimal()) {
        // ignore it
    }
    else {
        display.value += n;
    }

}

function displayAlreadyHasDecimal() {
    return display.value.search(/\./) > -1;
}


function nonNumberWasEntered(nn) {

    // is value1 set?

        // no...

            // set value1 = display.value
            // set operator = this key (nn)

        // yes...

            // is lastButton a operator?

                // yes...

                    // set operator = this key (nn)

                // no ...

                    // is value2 set?

                        // no...

                            // operator = this key (nn)
                            // value2 = display.value

                        // yes...

                            // value1 = value1 operator value2
                            // value2 = null
                            // operator = this key (nn)









}

function clear() {
    display.value = '0';
}


function isADigit(candidate) {
    return (0 <= candidate && candidate <= 9);
}

function isDecimal(candidate) {
    return (candidate == '.');
}

function isAnOperator(candidate) {
    return (candidate == '+' || candidate == '-' || candidate == 'X' || candidate == '/');
}

function isClear(candidate) {
    return (candidate == 'C');
}
