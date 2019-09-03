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

    dragCalculator(document.getElementById("calculatorSection"));

    function dragCalculator(drag) {
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        if (document.getElementById(drag.id + "header")) {
            document.getElementById(drag.id + "header").onmousedown = dragMouseDown;
        }
        else {
            drag.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragCalculator;
            document.onmousemove = calculatorDrag;
        }

        function calculatorDrag(e) {
            e = e || window.event;
            e.preventDefault();

            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            drag.style.top = (drag.offsetTop - pos2) + "px;";
            drag.style.left = (drag.offsetLeft - pos1) + "px";
        }

        function closeDragCalculator() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
};
