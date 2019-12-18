const readBtn = document.querySelector('#readBtn1');
const more = document.querySelector('#more1');
const dots = document.querySelector('#dots1');



more.style.display = 'none';

readBtn.addEventListener('click', () => {
    if (more.style.display == 'none') {
        dots.style.display = 'none';
        more.style.display = 'block';
        readBtn.innerText = 'Read Less';
    }
    else {
        dots.style.display = 'inline';
        more.style.display = 'none';
        readBtn.innerText = 'Read More';
    }
});

const readBtn2 = document.querySelector('#readBtn2');
const more2 = document.querySelector('#more2');
const dots2 = document.querySelector('#dots2');



more2.style.display = 'none';

readBtn2.addEventListener('click', () => {
    if (more2.style.display == 'none') {
        dots2.style.display = 'none';
        more2.style.display = 'block';
        readBtn2.innerText = 'Read Less';
    }
    else {
        dots2.style.display = 'inline';
        more2.style.display = 'none';
        readBtn2.innerText = 'Read More';
    }
});


const textEffect = document.getElementById("textEffect");

window.addEventListener("DOMContentLoaded", scrollByPage);
function scrollByPage() {
    textEffect.style.marginLeft = '20px';
    textEffect.style.transition = '1s ease-in-out';
}
scrollByPage();



const textEffect2 = document.getElementById("textEffect2");

window.addEventListener("scroll", scrollByPage2);

function scrollByPage2() {
    if (window.scrollY >= 500) {
        textEffect2.style.opacity = '1';
        textEffect2.style.transform = 'translateX(0px)';
        textEffect2.style.transition = '1s ease-in-out';
    }
    else {
        textEffect2.style.opacity = '0';
        textEffect2.style.transform = 'translateX(-20px)';
    }
}
scrollByPage2();


const textEffect3 = document.getElementById("textEffect3");

window.addEventListener("scroll", scrollByPage3);

function scrollByPage3() {
    if (window.scrollY >= 1250) {
        textEffect3.style.opacity = '1';
        textEffect3.style.transform = 'translateX(0px)';
        textEffect3.style.transition = '1s ease-in-out';
    }
    else {
        textEffect3.style.opacity = '0';
        textEffect3.style.transform = 'translateX(-20px)';
    }
}
scrollByPage3();



const textEffect4 = document.getElementById("textEffect4");

window.addEventListener("scroll", scrollByPage4);

function scrollByPage4() {
    if (window.scrollY >= 2250) {
        textEffect4.style.opacity = '1';
        textEffect4.style.transform = 'translateX(0px)';
        textEffect4.style.transition = '1s ease-in-out';
    }
    else {
        textEffect4.style.opacity = '0';
        textEffect4.style.transform = 'translateX(-20px)';
    }
}
scrollByPage4();


const textEffect5 = document.getElementById("textEffect5");

window.addEventListener("scroll", scrollByPage5);

function scrollByPage5() {
    if (window.scrollY >= 3000) {
        textEffect5.style.opacity = '1';
        textEffect5.style.transform = 'translateX(0px)';
        textEffect5.style.transition = '1s ease-in-out';
    }
    else {
        textEffect5.style.opacity = '0';
        textEffect5.style.transform = 'translateX(-20px)';
    }
}
scrollByPage5();


/* ---------------------Death Counter--------------------- */

const COUNTER = document.getElementById("counter");
const DEATHS = document.getElementById("death");

var theMinutes = 0;
var seconds = 0;

var count = 0;

document.addEventListener("DOMContentLoaded", countSeconds());

function countSeconds() {

    COUNTER.innerHTML = "<p>You've been here for <span class='blue-seconds'>" + theMinutes + ":" + seconds + "</span> minutes.</p>";
    DEATHS.innerHTML = "<p>Estimated amount of people that passed away: <span class='red-count'>" + count + "</span></p>";

    seconds++;
    count += 2;

    if (seconds % 60 == 0) {
        seconds = 0;
        theMinutes++;
        if (theMinutes < 10) {
            theMinutes = "0" + theMinutes;
        }
    }
    if (seconds < 10 || seconds == 0) {
        seconds = "0" + seconds;
    }
}

var time = setInterval(countSeconds, 1000);