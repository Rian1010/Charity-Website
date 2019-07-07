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

    const btns2 = document.querySelectorAll('.calcBtn2');
    const equalBtn2 = document.querySelector('.btn-equal2');
    const clearBtn2 = document.querySelector('.btn-clear2');
    const screen2 = document.querySelector('.screen2');


    for (let i = 0; i < btns2.length; i++) {
        btns2[i].addEventListener('click', function() {
            let number = btns2[i].getAttribute('data-num2');
            screen2.value += number;
        });

        equalBtn2.addEventListener('click', function() {
            if (screen2.value === '') {
                alert('Input is empty.');
            }
            else {
                let value = eval(screen2.value);
                screen2.value = value;
                //screenTotal2.value = value + "+";
            }
        });

        clearBtn2.addEventListener('click', function() {
            screen2.value = '';
        });
    }

    const btns3 = document.querySelectorAll('.calcBtn3');
    const equalBtn3 = document.querySelector('.btn-equal3');
    const clearBtn3 = document.querySelector('.btn-clear3');
    const screen3 = document.querySelector('.screen3');
    const screenTotal3 = document.querySelector('.screenTotal');


    for (let i = 0; i < btns3.length; i++) {
        btns3[i].addEventListener('click', function() {
            let number = btns3[i].getAttribute('data-num3');
            screen3.value += number;
        })

        equalBtn3.addEventListener('click', function() {
            if (screen3.value === '') {
                alert('Input is empty.');
            }
            else {
                let value = eval(screen3.value);
                screen3.value = value;
                //screenTotal3.value = value + "+";
            }
        });

        clearBtn3.addEventListener('click', function() {
            screen3.value = '';
        });
    }

    const btns4 = document.querySelectorAll('.calcBtn4');
    const equalBtn4 = document.querySelector('.btn-equal4');
    const clearBtn4 = document.querySelector('.btn-clear4');
    const screen4 = document.querySelector('.screen4');
    const screenTotal4 = document.querySelector('.screenTotal');

    for (let i = 0; i < btns4.length; i++) {
        btns4[i].addEventListener('click', function() {
            let number = btns4[i].getAttribute('data-num4');
            screen4.value += number;
        })

        equalBtn4.addEventListener('click', function() {
            if (screen4.value === '') {
                alert('Input is empty.');
            }
            else {
                let value = eval(screen4.value);
                screen4.value = value;
                //screenTotal4.value = value + "+";
            }
        });

        clearBtn4.addEventListener('click', function() {
            screen4.value = '';
        });
    }

    const btns5 = document.querySelectorAll('.calcBtn5');
    const equalBtn5 = document.querySelector('.btn-equal5');
    const clearBtn5 = document.querySelector('.btn-clear5');
    const screen5 = document.querySelector('.screen5');
    const screenTotal5 = document.querySelector('.screenTotal');

    for (let i = 0; i < btns5.length; i++) {
        btns5[i].addEventListener('click', function() {
            let number = btns5[i].getAttribute('data-num5');
            screen5.value += number;
        })

        equalBtn5.addEventListener('click', function() {
            if (screen5.value === '') {
                alert('Input is empty.');
            }
            else {
                let value = eval(screen5.value);
                screen5.value = value;
                //screenTotal.value5 = value + "+";
            }
        });

        clearBtn5.addEventListener('click', function() {
            screen5.value = '';
        });
    }

    const btns6 = document.querySelectorAll('.calcBtn6');
    const equalBtn6 = document.querySelector('.btn-equal6');
    const clearBtn6 = document.querySelector('.btn-clear6');
    const screen6 = document.querySelector('.screen6');
    const screenTotal6 = document.querySelector('.screenTotal');

    for (let i = 0; i < btns6.length; i++) {
        btns6[i].addEventListener('click', function() {
            let number = btns6[i].getAttribute('data-num6');
            screen6.value += number;
        })

        equalBtn6.addEventListener('click', function() {
            if (screen6.value === '') {
                alert('Input is empty.');
            }
            else {
                let value = eval(screen6.value);
                screen6.value = value;
                //screenTotal6.value = value;
            }
        });

        clearBtn6.addEventListener('click', function() {
            screen6.value = '';
        });
    }

    const screenTotal = document.querySelector('.screenTotal');
    const screenTotal2 = document.querySelector('.screenTotal2');
    const equalBtn7 = document.querySelector('.btn-equal7');

    equalBtn.addEventListener('click', function() {
        let value = eval(screen.value);
        screenTotal.value += value;
        
        if(screenTotal = value){
            screenTotal.value+"+";
        }
    });

    equalBtn2.addEventListener('click', function() {
        let value = eval(screen2.value);
        screenTotal.value += value;
    });

    equalBtn3.addEventListener('click', function() {
        let value = eval(screen3.value);
        screenTotal.value += value;
    });

    equalBtn4.addEventListener('click', function() {
        let value = eval(screen4.value);
        screenTotal.value += value;
    });

    equalBtn5.addEventListener('click', function() {
        let value = eval(screen5.value);
        screenTotal.value += value;
    });

    equalBtn6.addEventListener('click', function() {
        let value = eval(screen6.value);
        screenTotal.value += value;
    });

    equalBtn7.addEventListener('click', function() {
        let value = eval(screenTotal.value);
        screenTotal2.value += value;
    });

};
