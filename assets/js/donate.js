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
