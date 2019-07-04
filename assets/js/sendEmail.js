function sendMail(contactForm) {
    emailjs.send("gmail", "first_template", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "project_request": contactForm.Message.value,
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            
        });
}

window.onload = function() {
    const submitBtn = document.querySelector('#submitBtn');
    const nameBox = document.querySelector('#name');
    const emailBox = document.querySelector('#email');
    const MsgBox = document.querySelector('#contactMessage');

    submitBtn.addEventListener('click', sendMsg);

    function sendMsg() {
        let nameContent = nameBox.value;
        let emailContent = emailBox.value;
        let MsgContent = MsgBox.value;
        console.log(nameContent);
        console.log(emailContent);
        console.log(MsgContent);

        if (nameContent=== '') {
            alert('Please fill in the input field for your name.');
        }
        if (emailContent === '') {
            alert('Please fill in the input field for your email address.');
        }
        if (MsgContent === '') {
            alert('Please fill in the input field for your message.');
        }
        else {
            alert('Thank you for your message! It will be sent now.');
        }
    }
}
