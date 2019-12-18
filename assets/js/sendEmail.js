function sendMail(name, email, message) {
    emailjs.send("gmail", "first_template", {
            "from_name": name,
            "from_email": email,
            "project_request": message,
        })
        .then(
            function(response) {
                let form = document.getElementById("contact_form");
                let replacement = form.innerHTML = "<h2>Thank you for your message! It has been sent!</h2>";
            },
            function(error) {
                let form = document.getElementById("contact_form");

                form.innerHTML = "<h2>There has been an error sending the message.</h2>";
            });
        return false;
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

        if (nameContent === '') {
            alert('Please fill in the input field for your name.');
        }
        else if (emailContent === '') {
            alert('Please fill in the input field for your email address.');
        }
        else if (MsgContent === '') {
            alert('Please fill in the input field for your message.');
        }
        else {
            sendMail(nameContent, emailContent, MsgContent);
        }
    }
}
