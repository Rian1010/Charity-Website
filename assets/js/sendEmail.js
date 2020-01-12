function sendMail(name, email, message) {
    // Records a user's name, email address and message for the receiver to see this information in an email
    emailjs.send("gmail", "first_template", {
            "from_name": name,
            "from_email": email,
            "project_request": message,
        })
        // Let users know, if the message was successfully sent or not
        .then(
            // Function that lets users know, if the message was successfully sent
            function(response) {
                let form = document.getElementById("contact_form");
                let replacement = form.innerHTML = "<h2>Thank you for your message! It has been sent!</h2>";
            },
            // Function that lets users know, if the message was notsuccessfully sent
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

        // Alerts pop up, if a required field has not been filled in, before pressing on the submit
        if (nameContent === '') {
            alert('Please fill in the input field for your name.');
        }
        else if (emailContent === '') {
            alert('Please fill in the input field for your email address.');
        }
        else if (MsgContent === '') {
            alert('Please fill in the input field for your message.');
        }
        // The sendMail function gets called, if each of the required fields on the page have been filled in
        else {
            sendMail(nameContent, emailContent, MsgContent);
        }
    }
}
