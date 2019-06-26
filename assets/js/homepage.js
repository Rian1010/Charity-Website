const readBtn = document.querySelector('#readBtn1');
const more = document.querySelector('#more1');
const dots = document.querySelector('#dots1');



more.style.display = 'none';

readBtn.addEventListener('click', () => {
    if (more.style.display == 'none') {
        dots.style.display = 'none';
        more.style.display = 'block';
        readBtn.innerText = 'Read Less';
        console.log('this is working');
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
        console.log('this is working');
    }
    else {
        dots2.style.display = 'inline';
        more2.style.display = 'none';
        readBtn2.innerText = 'Read More';
    }
});


/*
window.addEventListener("scroll", function() {showFunction()});
window.addEventListener("scroll", function() {showFunction2()});
window.addEventListener("scroll", function() {showFunction3()});

function showFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("section2-text").style.display = "block";
    } else {
        document.getElementById("section2-text").style.display = "none";
    }
}

function showFunction2() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("section3-text").style.display = "block";
    } else {
        document.getElementById("section3-text").style.display = "none";
    }
}

function showFunction3() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("section4-text").style.display = "block";
    } else {
        document.getElementById("section4-text").style.display = "none";
    }
}*/