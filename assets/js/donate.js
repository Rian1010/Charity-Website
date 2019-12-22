// Open and close the accordions
// Change the + symbol to switch to the - symbol, if the accordion opens, and switch it back to the + symbol, if the accordion closes
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



dragElement(document.getElementById("calculator-wrapper"));

function dragElement(elmnt) {
    // Initial values to work with them throughout next funtions
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
        
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    }
    else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        // use either the mouse event or the window event
        e = e || window.event;
        // prevents the default action from stopping the drag
        e.preventDefault();
        // get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        // use either the mouse event or the window event
        e = e || window.event;
        // prevents the default action from stopping the drag
        e.preventDefault();
        // pos3 and pos4 are the new positions 
        // pos1 and pos2 are the distance/difference from the old position
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}