// Open and close the accordions
// Also, change the + symbol to switch to the - symbol, if the accordion opens, and switch it back to the + symbol, if the accordion closes
// I learned how to write the code for the accordions and used most of its code from this W3Schools page: https://www.w3schools.com/howto/howto_js_accordion.asp

var collapse = document.getElementsByClassName("charity-collapse");
var i;
// Iterate through each accordion
for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function () {
        // The classList won't work on IE9!!! IE9 is an old version!
        this.classList.toggle("symbol");
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Aside Calculator Button
// The following code was written by myself
const calculatorBtn = document.querySelector('#calcBtn');
const theCalculator = document.querySelector('#calculator-wrapper')

theCalculator.style.display = 'none';

calculatorBtn.addEventListener('click', () => {
    // Display calculator
    if (theCalculator.style.display == 'none') {
        theCalculator.style.display = 'block';
    }
    // Hide calculator
    else {
        theCalculator.style.display = 'none';
    }
});

// Cause the calculator to function
// I got all of the following codes for the calculator with the help of tutors and a YouTube Video by motiQ: https://www.youtube.com/watch?v=JDiurjhpOXA

const btns = document.querySelectorAll('.calcBtn');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
const screen = document.querySelector('.screen');

// Makes the corresponding numbers and symbols appear on screen, through a click
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;

    });
}

// Make the equal button work
equalBtn.addEventListener('click', function () {
    // Cause no value to equal 0
    if (screen.value === '') {
        screen.value = '0';
    }
    // Cause each give calculation to be calculated and displayed on screen
    else {
        let value = eval(screen.value);
        screen.value = value;
    }
});
// Cause all values in the screen to be cleared
clearBtn.addEventListener('click', function () {
    screen.value = '';
});


// Code to drag the Calculator
// I got the following four functions to move the calculator around the page, with the help of tutors and a stackoverflow post from this page: https://stackoverflow.com/questions/53247852/javascript-moveable-divs-with-javascript).

dragElement(document.getElementById("calculator-wrapper"));

function dragElement(calculator) {
    // Initial values to work with them throughout next funtions
    var position1 = 0,
        position2 = 0,
        position3 = 0,
        position4 = 0;
        
    if (document.getElementById(calculator.id + "header")) {
        document.getElementById(calculator.id + "header").onmousedown = dragMouseDown;
    }
    else {
        calculator.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        // use either the mouse event or the window event
        e = e || window.event;
        // prevents the default action from stopping the drag effect
        e.preventDefault();
        // get the mouse cursor position at startup
        position3 = e.clientX;
        position4 = e.clientY;
        document.onmouseup = closeDragCalculator;
        // call a function whenever the cursor moves
        document.onmousemove = calculatorDrag;
    }

    function calculatorDrag(e) {
        // use either the mouse event or the window event
        e = e || window.event;
        // prevents the default action from stopping the drag effect
        e.preventDefault();
        // pos3 and pos4 are the new positions 
        // pos1 and pos2 are the distance/difference from the old position
        // calculate the new cursor position:
        position1 = position3 - e.clientX;
        position2 = position4 - e.clientY;
        position3 = e.clientX;
        position4 = e.clientY;
        // set the element's new position:
        calculator.style.top = (calculator.offsetTop - position2) + "px";
        calculator.style.left = (calculator.offsetLeft - position1) + "px";
    }

    function closeDragCalculator() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}