window.onload = function() {
    var collapse = document.getElementsByClassName("charity-collapse");
    var i;

    for (i = 0; i < collapse.length; i++) {
        collapse[i].addEventListener("click", function() {
            this.classList.toggle("symbol");
            console.log('the toggle for the symbol is working');
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                console.log('The if statement is working');
            }
            /*
                The classList won't work on IE9!!! IE9 is an old version!!!
            */
            else {
                content.style.maxHeight = content.scrollHeight + "px";
                console.log('The else statement is working');
            }
        });
    }

    //Aside Calculator Button
    const calculatorBtn = document.querySelector('#calcBtn');
    const theCalculator = document.querySelector('#calculatorSection')


    theCalculator.style.display = 'none';

    calculatorBtn.addEventListener('click', () => {
        if (theCalculator.style.display == 'none') {
            theCalculator.style.display = 'block';
            console.log('this is working');
        }
        else {
            theCalculator.style.display = 'none';
        }
    });

    //Calculator

    const btns = document.querySelectorAll('.calcBtn');
    const equalBtn = document.querySelector('.btn-equal');
    const clearBtn = document.querySelector('.btn-clear');
    const screen = document.querySelector('.screen');


    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            let number = btns[i].getAttribute('data-num');
            screen.value += number;

        });

        equalBtn.addEventListener('click', function() {
            if (screen.value === '') {
                alert('Input is empty.');
            }
            else {
                let value = eval(screen.value);
                screen.value = value;
                //screenTotal.value = value + "+";
            }
        });

        clearBtn.addEventListener('click', function() {
            screen.value = '';
        });
    }
};

dragElement(document.getElementById("calculatorSection"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    }
    else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
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
