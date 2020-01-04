// Cause 'Read More' buttons to show more text and 'Read Less' buttons to show less text
const readBtn = document.querySelector('#readBtn1');
const more = document.querySelector('#more1');
const dots = document.querySelector('#dots1');

more.style.display = 'none';

readBtn.addEventListener('click', () => {
    // Display more text and a 'Read Less' button
    if (more.style.display == 'none') {
        dots.style.display = 'none';
        more.style.display = 'block';
        readBtn.innerText = 'Read Less';
    }
    // Display less text and a 'Read More' button
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
    // Display more text and a 'Read Less' button
    if (more2.style.display == 'none') {
        dots2.style.display = 'none';
        more2.style.display = 'block';
        readBtn2.innerText = 'Read Less';
    }
    // Display less text and a 'Read More' button
    else {
        dots2.style.display = 'inline';
        more2.style.display = 'none';
        readBtn2.innerText = 'Read More';
    }
});


// Causes the first text section of the homepage to appear on load
const textEffect = document.getElementById("textEffect");

window.addEventListener("DOMContentLoaded", scrollByPage);
function scrollByPage() {
    textEffect.style.marginLeft = '20px';
    textEffect.style.transition = '1s ease-in-out';
}
scrollByPage();


// Causes the text sections of the homepage to appear on certain scroll positions
const textEffect2 = document.getElementById("textEffect2");
const textEffect3 = document.getElementById("textEffect3");
const textEffect4 = document.getElementById("textEffect4");
const textEffect5 = document.getElementById("textEffect5");

window.addEventListener("scroll", scrollByPage2);

function scrollByPage2() {
//     switch (textEffect2) {
//         case window.scrollY >= 700 && window.scrollY < 1600:
//             console.log("its working");
//             textEffect2.style.opacity = '1';
//             textEffect2.style.transform = 'translateX(0px)';
//             textEffect2.style.transition = '1s all ease-in-out';
//             break;
//         default: 
//         textEffect2.style.opacity = '0';
//         textEffect2.style.transform = 'translateX(-20px)';

//     }
// }
    if (window.scrollY >= 700 && window.scrollY < 1600) {
        console.log("its working");
        textEffect2.style.opacity = '1';
        textEffect2.style.transform = 'translateX(0px)';
        textEffect2.style.transition = '1s all ease-in-out';
    }
    if (window.scrollY >= 1600 && window.scrollY < 2500) {
        textEffect3.style.opacity = '1';
        textEffect3.style.transform = 'translateX(0px)';
        textEffect3.style.transition = '1s all ease-in-out';
    }
    if (window.scrollY >= 2500 && window.scrollY < 3200) {
        textEffect4.style.opacity = '1';
        textEffect4.style.transform = 'translateX(0px)';
        textEffect4.style.transition = '1s all ease-in-out';
    }
    if (window.scrollY >= 3200) {
        textEffect5.style.opacity = '1';
        textEffect5.style.transform = 'translateX(0px)';
        textEffect5.style.transition = '1s all ease-in-out';
    }
    else {
        textEffect2.style.opacity = '0';
        textEffect2.style.transform = 'translateX(-20px)';
        textEffect3.style.opacity = '0';
        textEffect3.style.transform = 'translateX(-20px)';
        textEffect4.style.opacity = '0';
        textEffect4.style.transform = 'translateX(-20px)';
        textEffect5.style.opacity = '0';
        textEffect5.style.transform = 'translateX(-20px)';
    }

    scrollByPage2();

    // const textEffect2 = document.getElementById("textEffect2");

    // window.addEventListener("scroll", scrollByPage2);

    // function scrollByPage2() {
    //     if (window.scrollY >= 700) {
    //         textEffect2.style.opacity = '1';
    //         textEffect2.style.transform = 'translateX(0px)';
    //         textEffect2.style.transition = '1s ease-in-out';
    //     }
    //     else {
    //         textEffect2.style.opacity = '0';
    //         textEffect2.style.transform = 'translateX(-20px)';
    //     }
    // }
    // scrollByPage2();


    // const textEffect3 = document.getElementById("textEffect3");

    // window.addEventListener("scroll", scrollByPage3);

    // function scrollByPage3() {
    //     if (window.scrollY >= 1600) {
    //         textEffect3.style.opacity = '1';
    //         textEffect3.style.transform = 'translateX(0px)';
    //         textEffect3.style.transition = '1s ease-in-out';
    //     }
    //     else {
    //         textEffect3.style.opacity = '0';
    //         textEffect3.style.transform = 'translateX(-20px)';
    //     }
    // }
    // scrollByPage3();



    // const textEffect4 = document.getElementById("textEffect4");

    // window.addEventListener("scroll", scrollByPage4);

    // function scrollByPage4() {
    //     if (window.scrollY >= 2500) {
    //         textEffect4.style.opacity = '1';
    //         textEffect4.style.transform = 'translateX(0px)';
    //         textEffect4.style.transition = '1s ease-in-out';
    //     }
    //     else {
    //         textEffect4.style.opacity = '0';
    //         textEffect4.style.transform = 'translateX(-20px)';
    //     }
    // }
    // scrollByPage4();


    // const textEffect5 = document.getElementById("textEffect5");

    // window.addEventListener("scroll", scrollByPage5);

    // function scrollByPage5() {
    //     if (window.scrollY >= 3200) {
    //         textEffect5.style.opacity = '1';
    //         textEffect5.style.transform = 'translateX(0px)';
    //         textEffect5.style.transition = '1s ease-in-out';
    //     }
    //     else {
    //         textEffect5.style.opacity = '0';
    //         textEffect5.style.transform = 'translateX(-20px)';
    //     }
    // }
    // scrollByPage5();

    // Death Counter

    const COUNTER = document.getElementById("counter");
    const DEATHS = document.getElementById("death");

    var theMinutes = 0;
    var seconds = 0;

    var count = 0;

    document.addEventListener("DOMContentLoaded", countSeconds());

    function countSeconds() {
        // Display text for the counters
        COUNTER.innerHTML = "<p>You've been here for <span class='blue-seconds'>" + theMinutes + ":" + seconds + "</span> minutes.</p>";
        DEATHS.innerHTML = "<p>Estimated amount of people that passed away: <span class='red-count'>" + count + "</span></p>";
        // Count up by one
        seconds++;
        // Count up by two
        count += 2;

        // Set up the timer
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
    // cause the function to work after each 1000 miliseconds
    var time = setInterval(countSeconds, 1000);