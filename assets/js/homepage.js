const readBtn = document.querySelector('.readBtn');
const more = document.querySelector('.more');
const dots = document.querySelector('.dots');



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



more.style.display = 'none';

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



/*document.getElementById("readBtn").addEventListener("click", Read());

function Read() {
    var dots = document.getElementById("dots");
    var ReadText = document.getElementById("more");
    var btnText = document.getElementById("readBtn");

    if (ReadText.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        ReadText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        ReadText.style.display = "inline";
    }
}

return Read();*/
