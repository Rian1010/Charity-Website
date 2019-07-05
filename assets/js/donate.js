var collapse = document.getElementsByClassName("charity-collapse");
var i;

for (i = 0; collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("symbol");
        console.log('the toggle for the symbol is working');
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            console.log('if is working');
        }
        /*
            The classList won't work on IE9!!! IE9 is an old version!!!
        */
        else {
            content.style.maxHeight = content.scrollHeight + "px";
            console.log('else is working');
        }
    });
}
