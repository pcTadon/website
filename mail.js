// script.js

// Initialize EmailJS with your Public Key
(function() {
emailjs.init("85yaN9txRzjbB4xAX"); 
    })();

// Attach event listener to the form
window.onload = function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent page reload

        // Collect form data
        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Send email using EmailJS
        emailjs.send("service_b6m8vth", "template_2ujfnxo", templateParams)
        .then(function(response) {
            alert("Email sent successfully!");
            console.log("SUCCESS!", response.status, response. text);
        }, function(error) {
            alert("Failed to send email. Check console for details.");
            console.error("FAILED ... ", error);
        });
    });
};