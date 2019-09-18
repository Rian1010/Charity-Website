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

window.onload = function() {
    const textEffect = document.getElementById("textEffect");

    window.addEventListener("scroll", scrollByPage);
    function scrollByPage() {
        if (window.scrollY >= 0) {
            textEffect.style.opacity = '1';
            textEffect.style.transform = 'translateX(20px)';
            textEffect.style.transition = '1s ease-in-out';
            console.log('The scroll effect 1 is working!');
        } /*else {
            textEffect.style.opacity = '0';
            textEffect.style.transform = 'translateX(0px)';
        }*/
    }
    scrollByPage();
    console.log(window.scrollY);



    const textEffect2 = document.getElementById("textEffect2");

    window.addEventListener("scroll", scrollByPage2);

    function scrollByPage2() {
        if (window.scrollY >= 500) {
            textEffect2.style.opacity = '1';
            textEffect2.style.transform = 'translateX(0px)';
            textEffect2.style.transition = '1s ease-in-out';
            console.log('The scroll effect 2 is working!');
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
            console.log('The scroll effect 3 is working!');
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
            console.log('The scroll effect 4 is working!');
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
            console.log('The scroll effect 5 is working!');
        }
        else {
            textEffect5.style.opacity = '0';
            textEffect5.style.transform = 'translateX(-20px)';
        }
    }
    scrollByPage5();
};


/*
window.onload = function() {

    var textEffect = document.querySelector('.text-effect');
    var textPosition = textEffect.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.4;

    window.addEventListener('scroll', scrollAppear);

    function scrollAppear() {


        if (textPosition < screenPosition) {
            textEffect.classList.add('.text-appear');
            console.log('This is working!');
        }
    }

}*/



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



